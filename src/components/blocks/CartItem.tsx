import { Typography, IconButton } from '@material-tailwind/react'
import { TrashCan } from 'akar-icons'
import Image from "next/image"
import React from 'react'

import useCartItems from '@/store/useCartItems'

const CartItem = ({ product }: { product: Model.Product & { quantity: number } }) => {
    const { removeFromCart } = useCartItems()

    return (

        <div className="flex gap-3 items-stretch">
            <div className="w-20 h-20 shrink-0 overflow-hidden relative">
                {product.thumbnail ? <Image src={product.thumbnail} alt={product.title} fill /> : null}
            </div>
            <div className="flex-1">
                <Typography variant="h6" className="text-primary-500 font-semibold text-xs">
                    {product.title}
                </Typography>
                <div className="flex gap-2 items-center">
                    <Typography variant="paragraph" className="text-primary-500">
                        {product.price}$
                    </Typography>
                    <Typography variant="small" className="text-primary-500">
                        x
                    </Typography>
                    <Typography variant="paragraph" className="text-primary-500">
                        {product.quantity}
                    </Typography>
                </div>
            </div>

            <IconButton variant="text" onClick={() => removeFromCart(product.id)} className="ml-auto">
                <TrashCan strokeWidth={1.5} size={20} />
            </IconButton>

        </div>

    )
}

export default CartItem