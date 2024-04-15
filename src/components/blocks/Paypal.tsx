"use client"
import { Typography, Button } from "@material-tailwind/react"

const Paypal = () => {

    return (
        <div className="flex flex-col gap-4">
            <Typography>
                You will be redirected to the PayPal site after reviewing your order.
            </Typography>
            <Button className="w-1/2">
                Continue To Order Review
            </Button>
        </div>
    )
}

export default Paypal