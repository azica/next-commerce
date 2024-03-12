"use client"
import { Button, Card, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

import CheckoutItems from "@/components/blocks/CheckoutItems"
import Container from "@/components/layout/Container";

const Checkout = () => {
    const [subtotal, setSubtotal] = useState(0)
    const [cartList, setCartList] = useState<({ quantity: number } & Model.Product)[]>([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cartListFromLocalStorage = localStorage.getItem("cartList") || "[]"
            setCartList(JSON.parse(cartListFromLocalStorage))
        }
    }, [])

    useEffect(() => {
        setSubtotal(cartList.reduce((acc, item) => acc + item.price * item.quantity, 0))
    }, [cartList])

    const deleteFromCartHandle = (id: number) => {
        const updatedCartList = cartList.filter((item) => item.id !== id)
        setCartList(updatedCartList)
        localStorage.setItem("cartList", JSON.stringify(updatedCartList))
    }

    const changeHandle = (id: number, operation: string) => {
        const updatedCartList = cartList
            .map((el) => {
                if (el.id === id) {
                    let newQuantity = el.quantity;
                    if (operation === "add") {
                        newQuantity++;
                    } else if (operation === "subtract") {
                        newQuantity--;
                    }

                    if (newQuantity < 0) {
                        return null;
                    }
                    return { ...el, quantity: newQuantity };
                }
                return el;
            })
            .filter((item) => item && item.quantity !== 0) as ({ quantity: number } & Model.Product)[]; // Filter out null and items with quantity 0

        setCartList(updatedCartList);
        localStorage.setItem("cartList", JSON.stringify(updatedCartList));
    };

    return (
        <Container>
            <h2 className="mb-10">Checkout</h2>
            <div className="flex gap-10">
                <div className="w-2/3">
                    <Typography variant="h5" className="text-center text-purple-500 font-medium my-4 pb-4">
                        You have {cartList.length} item{cartList.length !== 1 ? "s" : ""} in your cart
                    </Typography>
                    <CheckoutItems cartList={cartList} deleteHandle={deleteFromCartHandle} changeHandle={changeHandle} />
                </div>
                <div className="w-1/3">
                    <Card className="p-5">
                        <div className="flex items-center justify-between py-3 border-b border-gray-500">
                            <Typography className="text-sm font-semibold text-black">
                                Subtotal
                            </Typography>
                            <Typography className="font-semibold text-black">
                                ${subtotal.toFixed(2)}
                            </Typography>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-500">
                            <Typography className="font-sm text-black">
                                Deliver Charge
                            </Typography>
                            <Typography className="text-black">
                                $5.00
                            </Typography>
                        </div>
                        <div className="flex items-center justify-between py-3 mb-2">
                            <Typography className="text-sm font-semibold text-black ">
                                Grand Total
                            </Typography>
                            <Typography className="text-black font-semibold">
                                ${(subtotal + 5).toFixed(2)}
                            </Typography>
                        </div>
                        <Button variant="filled" fullWidth>
                            Proceed to Checkout
                        </Button>
                    </Card>
                </div>
            </div>
        </Container>
    )
}

export default Checkout;