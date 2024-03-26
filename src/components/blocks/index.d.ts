import type { FC } from 'react'

export declare global {

    type FormProps<T> = {
        values: InputData[];
        onSubmit: (data: T) => void;
        buttonLoading: boolean;
        buttonName: string;
        gridCols?: string;
    }

    type Modal = FC<{
        open: boolean;
        handleOpen: () => void;
        size?: size;
        header?: ReactNode;
        footer?: ReactNode;
        children: ReactNode;
    }>;

    type AuthFormData = {
        title: string;
        subtitle: string;
        buttonText: string;
        inputs: InputData[];
    };

    type AddressValues = {
        name: string;
        mobileNumber: string;
        address: string;
    };

    type CreditCardValues = {
        cardNumber: string;
        cardName: string;
        expiredDate: string;
        cvv: string
    }

    type AuthValues = {
        email: string;
        password: string;
        name: string;
    };

    type AuthForm = FC<{
        inputs: InputData[];
        buttonText: string;
        hasAccount: boolean;
        setHasAccount: () => void;
        setForgetPassword: () => void;
        forgetPassword: boolean;
    }>;
}