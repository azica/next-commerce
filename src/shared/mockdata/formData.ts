export const countries = [
    { name: "Afghanistan", value: "Afghanistan" }, { name: "Aland Islands", value: "AlandIslands" }, { name: "Albania", value: "Albania" }, { name: "Barbados", value: "Barbados" }
];

export const profileValues: InputData[] = [
    {
        id: 1,
        value: "",
        field: "firstName",
        placeholder: "First Name",
        type: "text",
        required: true,
        label: "First Name",
        autoComplete: "off",
        validations: {
            required: "First Name is required.",
        },
        className: "col-span-2",
    },
    {
        id: 2,
        value: "",
        field: "lastName",
        placeholder: "Last Name",
        type: "text",
        required: true,
        label: "Last Name",
        autoComplete: "off",
        validations: {
            required: "Last Name is required.",
        },
        className: "col-span-2",
    },
    {
        id: 3,
        value: "",
        field: "mobileNumber",
        placeholder: "Enter Mobile Number",
        type: "tel",
        required: true,
        label: "Mobile Number",
        autoComplete: "off",
        validations: {
            required: "Mobile number is required.",
        },
        className: "col-span-1",
        mask: "+7 999 999 99 99",
    },
    {
        id: 4,
        value: "",
        field: "email",
        placeholder: "Email",
        type: "email",
        required: true,
        label: "Email Address",
        autoComplete: "off",
        validations: {
            required: "Email Address is required.",
        },
        className: "col-span-2",
    },
    {
        id: 5,
        value: "",
        field: "address",
        placeholder: "Address",
        type: "Address",
        required: true,
        label: "Address",
        autoComplete: "off",
        validations: {
            required: "Address is required.",
        },
        className: "col-span-1",
    },
]

export const addressValues: InputData[] = [
    {
        id: 1,
        value: "",
        field: "name",
        placeholder: "Enter Name",
        type: "text",
        required: true,
        label: "Name",
        autoComplete: "off",
        validations: {
            required: "Name is required.",
        },
        className: "col-span-2"
    },
    {
        id: 2,
        value: "",
        field: "mobileNumber",
        placeholder: "Enter Mobile Number",
        type: "tel",
        required: true,
        label: "Mobile Number",
        autoComplete: "off",
        validations: {
            required: "Mobile number is required.",
        },
        className: "col-span-1",
        mask: "+7 999 999 99 99",
    },
    {
        id: 3,
        value: "",
        field: "zipCode",
        placeholder: "Enter Zip Code",
        type: "text",
        required: true,
        label: "Zip Code",
        autoComplete: "off",
        validations: {
            required: "Zip code number is required.",
            minLength: {
                value: 4,
                message: "Zip Code must be at least 4 characters.",
            },
            maxLength: {
                value: 6,
                message: "Zip Code cannot exceed 6 characters.",
            },
        },
        className: "col-span-1",
        mask: "999999"
    },
    {
        id: 4,
        value: "",
        field: "country",
        placeholder: "Country",
        type: "select",
        required: true,
        label: "Enter Country",
        autoComplete: "off",
        validations: {
            required: "Country is required.",
        },
        options: countries,
        className: "col-span-2"
    },
    {
        id: 5,
        value: "",
        field: "address",
        placeholder: "Address",
        type: "tel",
        required: true,
        label: "Address",
        autoComplete: "off",
        validations: {
            required: "Address is required.",
        },
        className: "col-span-2"
    },
]

export const creditCardValues: InputData[] = [
    {
        id: 1,
        value: "",
        field: "cardNumber",
        placeholder: "4444 4444 4444 4444",
        type: "text",
        required: true,
        label: "Card Number",
        autoComplete: "off",
        mask: "9999 9999 9999 9999",
        validations: {
            required: "Card Number is required.",
            pattern: {
                value: /^(?:\d{4} ?){4}$/,
                message: "Invalid card number.",
            },
        },
        className: "col-span-2"
    },
    {
        id: 2,
        value: "",
        field: "cardName",
        placeholder: "Card Name",
        type: "text",
        label: "Card Name",
        autoComplete: "off",
        validations: {
            required: "Card Name is required.",
        },
        className: "col-span-2"
    },
    {
        id: 3,
        value: "",
        field: "expiredDate",
        placeholder: "MM/YY",
        mask: "99/99",
        type: "text",
        required: true,
        label: "Expiry Date",
        autoComplete: "off",
        validations: {
            required: "Expiry Date is required.",
            pattern: {
                value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                message: "Invalid expiry date. Please enter in MM/YY format.",
            },
        },
    },
    {
        id: 4,
        value: "",
        field: "cvv",
        placeholder: "CVV",
        type: "text",
        required: true,
        label: "CVV",
        autoComplete: "off",
        mask: "999",
        validations: {
            required: "CVV is required.",
            minLength: {
                value: 3,
                message: "CVV must be at least 3 characters.",
            },
            maxLength: {
                value: 4,
                message: "CVV cannot exceed 4 characters.",
            },
            pattern: {
                value: /^[0-9]{3,4}$/,
                message: "Invalid CVV. CVV must be a 3 or 4-digit number.",
            },
        },
    }
]

export const reviewValues: InputData[] = [
    {
        id: 1,
        value: "",
        field: "Name",
        placeholder: "Name",
        type: "text",
        required: true,
        label: "First Name",
        autoComplete: "off",
        validations: {
            required: "First Name is required.",
        },
        className: "col-span-1",
    },
    {
        id: 2,
        value: "",
        field: "email",
        placeholder: "Email",
        type: "email",
        required: true,
        label: "Email Address",
        autoComplete: "off",
        validations: {
            required: "Email Address is required.",
        },
        className: "col-span-1",
    },
    {
        id: 3,
        value: "",
        field: "Review",
        placeholder: "Your Review",
        type: "Review",
        required: true,
        label: "Your Review",
        autoComplete: "off",
        validations: {
            required: "Review is required.",
        },
        className: "col-span-1",
    },
]