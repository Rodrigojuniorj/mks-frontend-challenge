import { useCart } from '@/context/cart-context';
import './drawer.scss';
import { Item } from './item/item.component';

type TDrawer = {
    toggleDrawer: () => void
}

export function Drawer({ toggleDrawer }: TDrawer){
    const { items } = useCart()

    return (
        <div className="drawer_container">
            <div className='drawer_header'>
                <div>
                    <h1>Carrinho</h1>
                    <h1>de compras</h1>
                </div>
                <button onClick={toggleDrawer}>
                    <span>
                    x
                    </span>
                </button>
            </div>

            <div className='drawer_body'>
                {items.map(item => (
                    <Item key={item.id} id={item.id} amount={item.amount} name={item.name} photo={item.photo} total={item.total} />
                ))}
            </div>
        </div>
    )
}