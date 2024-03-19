
import { creditCardValues } from "@/shared/mockdata/mockdata";

import Form from "./Form";

type FormValues = {
    cardNumber: string;
    cardName: string;
    expiredDate: string;
    cvv: string
};

const CreditCardForm = () => {

    const submitHandle = (data: FormValues) => {
        console.log(data)
    }
    return (
        <Form
            values={creditCardValues}
            onSubmit={submitHandle}
            buttonName="Add Card"
            buttonLoading={false}
        />
    )
}

export default CreditCardForm
