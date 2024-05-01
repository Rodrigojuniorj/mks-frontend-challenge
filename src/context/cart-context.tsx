'use client'

import { TCart, TProduct } from '@/data/types/cart'
import { ReactNode, createContext, useContext, useState } from 'react'

type CartContextType = {
  items: TCart[]
  addToCart: (productId: TProduct) => void
  total: number
  sumCart: (id: number, price: string) => void
  subtractFromCart: (id: number, price: string) => void
  deleteFromCart: (id: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<TCart[]>([])

  function sumCart(id: number, price: string) {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          total: item.total + 1,
          amount: item.amount + parseFloat(price)
        };
      }
      return item;
    });
  
    setCartItems(updatedCartItems);
  }

  function subtractFromCart(id: number, price: string) {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        const newTotal = Math.max(0, item.total - 1);
        const newAmount = Math.max(0, item.amount - parseFloat(price));
        return {
          ...item,
          total: newTotal,
          amount: newAmount
        };
      }
      return item;
    });
  
    setCartItems(updatedCartItems);
  }
  
  function deleteFromCart(id: number) {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  }

  function addToCart(product: TProduct) {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].total += 1;
      updatedCartItems[existingItemIndex].amount += parseFloat(product.price);
      setCartItems(updatedCartItems);
    } else {
      const newItem: TCart = {
        id: product.id,
        total: 1,
        name: product.name,
        photo: product.photo,
        price: product.price,
        amount: parseFloat(product.price),
      };
      setCartItems([...cartItems, newItem]);
    }
  }

  function countItemsInCart() {
    const totalCount = cartItems.reduce((total, currentItem) => {
      return total + currentItem.total;
    }, 0);
    return totalCount;
  }

  return (
    <CartContext.Provider value={{ 
      items: cartItems,
      addToCart, 
      total: countItemsInCart(),
      sumCart, 
      subtractFromCart, 
      deleteFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
