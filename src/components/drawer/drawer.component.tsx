import './drawer.scss'
import { Item } from './item/item.component'
import { formattedPrice } from '@/utils/formattedPrice'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { useCart } from '@/context/cart-context'

type TDrawer = {
  toggleDrawer: () => void
}

export function Drawer({ toggleDrawer }: TDrawer) {
  const { items, countTotalAmountInCart, finalizePurchase } = useCart()

  function handleSubmitCart() {
    const resolver = new Promise((resolve) => setTimeout(resolve, 2000))
    toast.promise(resolver, {
      pending: 'Finalizando sua compra',
      success: 'Compra finalizada com sucesso!',
      error: 'Algo deu errado',
    })
    resolver.then(() => {
      finalizePurchase()
    })
  }

  return (
    <div className="drawer_container">
      <div className="drawer_wrapper">
        <div className="drawer_header">
          <div>
            <h1>Carrinho</h1>
            <h1>de compras</h1>
          </div>
          <button onClick={toggleDrawer}>
            <span>x</span>
          </button>
        </div>

        <div className="drawer_body">
          <div className="item_content">
            {items.map((item) => (
              <Item
                price={item.price}
                key={item.id}
                id={item.id}
                amount={item.amount}
                name={item.name}
                photo={item.photo}
                total={item.total}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="drawer_footer">
        <motion.div layout>
          <p>Total:</p>
          <motion.p
            layout
            key={countTotalAmountInCart()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formattedPrice(countTotalAmountInCart().toString())}
          </motion.p>
        </motion.div>

        <button onClick={handleSubmitCart}>Finalizar Compra</button>
      </div>
    </div>
  )
}
