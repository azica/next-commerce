"use client"
import { Input, Radio, Typography, Button } from "@material-tailwind/react";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

import { paymentData, paymentMethods } from "@/shared/mockdata/mockdata"

type FormValues = {
    cardNumber: number;
    cardName: string;
    expiredDate: Date;
    cvv: number
};

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("debitCredit");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()


    console.log(paymentMethod)
    const submitHandle = (e: FormEvent) => {
        e.preventDefault()
        // handleSubmit()
    }
    return <>
        <Typography
            variant="h6"
        >
            Select a delivery address
        </Typography>
        <form onSubmit={submitHandle}>
            <div className="flex flex-col">
                {paymentMethods.map((input, idx) => (
                    <Radio
                        name={input.value}
                        label={input.label}
                        checked={input.checked}
                        key={idx}
                        className="border-bottom border-gray-900"
                        onChange={() => setPaymentMethod(e.value)} />
                ))}
            </div>
            <div className="flex gap-2 flex-col mb-5">
                {paymentData[paymentMethod]?.map((input) => (
                    <div key={input.id} className="relative">
                        <Typography className="mb-2 font-medium text-xs text-primary-500">{input.label}</Typography>
                        <Input
                            {...register(input.field as keyof FormValues, input.validations)}
                            size="lg"
                            name={input.field}
                            type={input.type}
                            placeholder={input.placeholder}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        {errors?.[input.field as keyof FormValues] && (
                            <Typography className="text-purple-400 text-xs absolute -bottom-5 transition-all duration-300">
                                {errors[input.field as keyof FormValues]?.message}
                            </Typography>
                        )}
                    </div>
                ))}
            </div>

            <Button>
                Add Card
            </Button>
        </form>
    </>
}

export default Payment