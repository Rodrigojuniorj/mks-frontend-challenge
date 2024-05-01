import './item.scss'
import { TCart } from '@/data/types/cart'
import Image from 'next/image'
import { formattedPrice } from '@/utils/formattedPrice'

export function Item({ id, name, amount, photo, total }: TCart){
    return (
        <div className='item_container'>
            <div className='item_left'>
                <Image src={photo} width={400} height={400} alt={name} />
                <p>{name}</p>
            </div>
            <div className='item_button_wrapper'>
                <span className='item_qtd'>Qtd:</span>
                <div className='item_button_container'>
                    <button className='button_left'>
                        <div>
                            <span>-</span>
                        </div>
                    </button>
                    <div className='item_center'>
                        <span>{total}</span>
                    </div>
                    <button className='button_right'>
                        <div>
                            <span>+</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className='item_right'>{formattedPrice(amount.toString())}</div>
        </div>
    )
}