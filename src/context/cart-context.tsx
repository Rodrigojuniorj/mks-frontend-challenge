'use client'

import { TCart, TProduct } from '@/data/types/cart'
import { ReactNode, createContext, useContext, useState } from 'react'

type CartContextType = {
  items: TCart[]
  addToCart: (productId: TProduct) => void
  total: number
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<TCart[]>([])

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
    <CartContext.Provider value={{ items: cartItems, addToCart, total: countItemsInCart() }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
