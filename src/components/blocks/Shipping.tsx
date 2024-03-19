"use client"

import { Typography } from "@material-tailwind/react"

import { addressValues } from "@/shared/mockdata/mockdata";

import Form from './Form'

type FormValues = {
    name: string;
    mobileNumber: string;
    address: string;
};

const Shipping = () => {

    const submitHandle = (data: FormValues) => {
        console.log(data)
    }

    return (<div>
        <Typography
            variant="h6"
        >
            Select a delivery address
        </Typography>
        <Typography
            className="font-normal"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, atque beatae sunt molestias reiciendis maiores sed neque magni. Sint, aspernatur.
        </Typography>
        <Form
            values={addressValues}
            onSubmit={submitHandle}
            buttonName="Add Address"
            buttonLoading={false}
        />
    </div>)
}

export default Shipping