"use client"

import './cards.scss'
import { getProducts } from "@/apis/getProducts.api"
import { formattedPrice } from "@/utils/formattedPrice"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

export function Cards() {
    const { data: products } = useQuery({ 
        queryKey: ['getProducts'], 
        queryFn: getProducts
    })

    if(!products){
        return <div>Carregando...</div>
    }
    
    return (
        products.products.map(product => (
            <div className="item_card" key={product.id}>
                <div className='content_card'>
                    <Image className='img_item' src={product.photo} width={400} height={400} alt={product.name} />
                    <div className='header_card'>
                        <p>{product.name}</p>
                        <span>{formattedPrice(product.price)}</span>
                    </div>

                    <p className='body_card'>{product.description}</p>
                </div>

                <button className='footer_card'>
                    <Image src="/store/shopping-bag.svg" width={20} height={20} alt="Shopping bag" />
                    <span>COMPRAR</span>
                </button>
            </div>
        ))
    )
}