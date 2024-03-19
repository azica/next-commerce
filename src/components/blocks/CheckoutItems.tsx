"use client"
import { IconButton, Typography } from "@material-tailwind/react"
import { Minus, Plus, TrashCan } from "akar-icons"
import Image from "next/image"

import useCartItems from "@/store/useCartItems"

const tableHead = ["Products", "", "Price", "Quantity", "Subtotal", ""]

const CheckoutItems = () => {
    const { cartList, addToCart, removeFromCart, subtractFromCart } = useCartItems()

    return <table className="w-full">
        <thead>
            <tr>
                {tableHead.map((head, idx) => (
                    <th
                        key={head + idx}
                        className="border-b border-blue-gray-100 pb-2 px-0"
                    >
                        <Typography
                            className="font-semibold text-black-500 text-left text-sm text-black"
                        >
                            {head}
                        </Typography>
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {cartList.map((el, index) => {
                const isLast = index === cartList.length - 1;
                const classes = isLast
                    ? "py-4"
                    : "py-4 border-b border-blue-gray-50";
                return <tr key={el.title + index}>
                    <td className={classes}>
                        <div className="w-20 h-20 shrink-0 relative overflow-hidden">
                            {el.thumbnail ? <Image src={el.thumbnail} alt={el.title} layout="fill" objectFit="cover" /> : null}
                        </div>
                    </td>
                    <td className={classes}>
                        <Typography className="text-primary-500 font-semibold text-sm">
                            {el.title}
                        </Typography>
                        <Typography variant="h6" className="text-primary-500 font-medium text-xs">
                            size
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography variant="paragraph" className="text-primary-500">
                            {el.price}$
                        </Typography>
                    </td>
                    <td className={classes}>
                        <div className="inline-flex items-stretch h-8">
                            <button className="rounded-l-md px-2 text-gray-900 hover:bg-gray-300 border border-r-0 border-black cursor-pointer outline-none"
                                onClick={() => subtractFromCart(el.id)}>
                                <Minus strokeWidth={1.5} size={16} />
                            </button>
                            <div className="text-sm w-full text-center border border-black border-r-0 border-l-0 min-w-4 leading-7">{el.quantity}</div>
                            <button className="rounded-r-md px-2 text-gray-900 hover:bg-gray-300 border border-l-0 border-black cursor-pointer outline-none"
                                onClick={() => addToCart(el)}>
                                <Plus strokeWidth={1.5} size={16} />
                            </button>
                        </div>
                    </td>
                    <td className={classes}>
                        ${el.price * el.quantity}
                    </td>
                    <td className={classes}>
                        <IconButton variant="text" onClick={() => removeFromCart(el.id)}>
                            <TrashCan strokeWidth={1.5} size={20} color="red" />
                        </IconButton>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
}

export default CheckoutItems;