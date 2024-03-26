
import { creditCardValues } from "@/shared/mockdata/mockdata";

import Form from "./Form";

const CreditCardForm = () => {

    const submitHandle = (data: CreditCardValues) => {
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
