'use client'
import './cards.scss'
import { useCart } from '@/context/cart-context'
import { getProducts } from '@/apis/getProducts.api'
import { formattedPrice } from '@/utils/formattedPrice'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { TProduct } from '@/data/types/cart'
import { motion, AnimatePresence } from 'framer-motion'

export function Cards() {
  const { addToCart } = useCart()

  const { data: products, isLoading } = useQuery({
    queryKey: ['getProducts'],
    queryFn: getProducts,
  })

  if (isLoading) {
    return <div>Carregando...</div>
  }

  function handleAddToCart(product: TProduct) {
    addToCart(product)
  }

  return (
    <AnimatePresence>
      {products && (
        <>
          {products.products.map((product) => (
            <motion.div
              className="item_card"
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="content_card">
                <Image
                  className="img_item"
                  src={product.photo}
                  width={400}
                  height={400}
                  alt={product.name}
                />
                <div className="header_card">
                  <p>{product.name}</p>
                  <span>{formattedPrice(product.price)}</span>
                </div>

                <p className="body_card">{product.description}</p>
              </div>

              <button
                className="footer_card"
                onClick={() => handleAddToCart(product)}
              >
                <Image
                  src="/store/shopping-bag.svg"
                  width={20}
                  height={20}
                  alt="Shopping bag"
                />
                <span>COMPRAR</span>
              </button>
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  )
}
