import './item.scss'
import { TCart } from '@/data/types/cart'
import Image from 'next/image'
import { formattedPrice } from '@/utils/formattedPrice'
import { useCart } from '@/context/cart-context'
import { motion } from 'framer-motion'

export function Item({ id, name, amount, photo, total, price }: TCart) {
  const { sumCart, subtractFromCart, deleteFromCart } = useCart()

  const handleDelete = () => {
    deleteFromCart(id)
  }

  return (
    <motion.div
      className="item_container"
      layout
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="item_left">
        <Image src={photo} width={400} height={400} alt={name} />
        <p>{name}</p>
      </div>
      <div className="item_button_wrapper">
        <span className="item_qtd">Qtd:</span>
        <div className="item_button_container">
          <button
            className="button_left"
            onClick={() => subtractFromCart(id, price)}
          >
            <div>
              <span>-</span>
            </div>
          </button>
          <div className="item_center">
            <span>{total}</span>
          </div>
          <button className="button_right" onClick={() => sumCart(id, price)}>
            <div>
              <span>+</span>
            </div>
          </button>
        </div>
      </div>
      <div className="item_right">{formattedPrice(amount.toString())}</div>
      <button className="delete_button" onClick={handleDelete}>
        <span>x</span>
      </button>
    </motion.div>
  )
}
