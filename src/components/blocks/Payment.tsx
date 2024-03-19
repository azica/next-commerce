"use client"

import { Button, Radio, Typography } from "@material-tailwind/react";
import { useState } from "react";

import { paymentMethods } from "@/shared/mockdata/mockdata";

import CreditCardForm from "./CreditCardForm";
import Paypal from "./Paypal";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("debitCredit");

    const paymentMethodsData: Record<string, any> = {
        debitCredit: <CreditCardForm />,
        paypal: <Paypal />,
        google: <Button className="w-1/2">Google Payment</Button>
    };

    return (
        <>
            <Typography variant="h6">
                Select a payment method
            </Typography>
            <div className="flex flex-col">
                {paymentMethods.map((input, idx) => (
                    <Radio
                        value={input.value}
                        label={<Typography className="font-medium text-primary-500">{input.label}</Typography>}
                        checked={paymentMethod === input.value}
                        key={idx}
                        className="text-primary-500 font-semibold"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        containerProps={{
                            className: "-ml-3 py-2",
                        }}
                    />
                ))}
            </div>
            <div className="my-5">
                {paymentMethodsData[paymentMethod]}
            </div>
        </>
    );
}

export default Payment;
