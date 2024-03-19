import { HomeAlt1, CreditCardAlt1, Receipt } from "akar-icons"

export const authData: Record<string, any> = {
  login: {
    title: "Welcome 👋 ",
    subtitle: "Please login here",
    buttonText: "Login",
    inputs: [
      {
        id: 1,
        value: "",
        field: "email",
        placeholder: "Email",
        type: "email",
        required: true,
        label: "Email Address",
        autoComplete: "off",
        validations: {
          required: "Email is required.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address.",
          },
        },
      },
      {
        id: 2,
        value: "",
        field: "password",
        placeholder: "Password",
        type: "password",
        required: true,
        label: "Password",
        autoComplete: "password",
        validations: {
          required: "Password is required.",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long.",
          },
        },
      },
    ],
  },
  register: {
    title: "Create New Account",
    subtitle: "Please enter details",
    buttonText: "Sign up",
    inputs: [
      {
        id: 1,
        value: "",
        field: "name",
        placeholder: "Name",
        type: "text",
        required: true,
        label: "Name",
        autoComplete: "off",
        validations: {
          required: "This field is required.",
          pattern: {
            value: " ^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$",
            message: "This field is required.",
          },
        },
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
          required: "Email is required.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address.",
          },
        },
      },
      {
        id: 3,
        value: "",
        field: "password",
        placeholder: "Password",
        type: "password",
        required: true,
        label: "Password",
        autoComplete: "password",
        validations: {
          required: "Password is required.",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long.",
          },
        },
      },
      {
        id: 4,
        value: "",
        field: "term",
        type: "checkbox",
        label: "I agree to the",
        validations: {
          required: "You must accept the terms and conditions.",
        },
      },
    ],
  },
  forgetPassword: {
    title: "Forgot Password",
    subtitle: "Enter your registered email address. we’ll send you a code to reset your password.",
    buttonText: "Send OTP",
    inputs: [
      {
        id: 1,
        value: "",
        field: "email",
        placeholder: "Email",
        type: "email",
        required: true,
        label: "Email Address",
        autoComplete: "off",
        validations: {
          required: "Email is required.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address.",
          },
        },
      },
    ],
  },
}

export const paymentMethods = [
  { label: "Debit/Credit Card", value: "debitCredit" },
  { label: "Google Pay", value: "google" },
  { label: "Paypal", value: "paypal" },
  { label: "Cash on Delivery", value: "cash" },
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


export const addressValues = [
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
    className: "col-span-1"
  },
  {
    id: 3,
    value: "",
    field: "address",
    placeholder: "Address",
    type: "tel",
    required: true,
    label: "Enter Address",
    autoComplete: "off",
    validations: {
      required: "Address is required.",
    },
    className: "col-span-1"
  },
]

export const steps = [
  { title: "Shipping Address", icon: HomeAlt1, link: "shipping" },
  { title: "Payment Method", icon: CreditCardAlt1, link: "payment" },
  { title: "Review Your Order", icon: Receipt, link: "review" },
]