"use client"

import { Card, Typography, Button } from "@material-tailwind/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import useCartItems from "@/store/useCartItems"

const CheckoutAside = () => {
    const { subtotal } = useCartItems()

    const pathname = usePathname()

    const getLink = () => {
        switch (pathname) {
            case "/checkout":
                return "/checkout/shipping";
            case "/checkout/shipping":
                return "/checkout/payment";
            case "/checkout/payment":
                return "/checkout/review";
            default:
                return "/checkout";
        }
    };

    return (
        <Card className="p-5 mt-[105px]">
            <div className="flex items-center justify-between py-3 border-b border-gray-500">
                <Typography variant="paragraph" className="text-sm font-semibold text-black">
                    Subtotal
                </Typography>
                <Typography variant="paragraph" className="font-semibold text-black">
                    ${subtotal.toFixed(2)}
                </Typography>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-500">
                <Typography variant="paragraph" className="font-sm text-black">
                    Deliver Charge
                </Typography>
                <Typography variant="paragraph" className="text-black">
                    $5.00
                </Typography>
            </div>
            <div className="flex items-center justify-between py-3 mb-2">
                <Typography variant="paragraph" className="text-sm font-semibold text-black ">
                    Grand Total
                </Typography>
                <Typography variant="paragraph" className="text-black font-semibold">
                    ${(subtotal + 5).toFixed(2)}
                </Typography>
            </div>
            <Link href={getLink()}>
                <Button variant="filled" fullWidth>
                    Proceed to Checkout
                </Button>
            </Link>
        </Card>
    )

}

export default CheckoutAside