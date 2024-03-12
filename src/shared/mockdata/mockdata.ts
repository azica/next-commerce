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
  {label: "Debit/Credit Card", value: "debitCredit", checked: true},
  {label: "Google Pay", value: "google", checked: false},
  {label: "Paypal", value: "paypal", checked: false},
  {label: "Cash on Delivery", value: "cash", checked: false},
]
export const paymentData:Record<string, InputData[]> = {
  debitCredit: [
    {
      id: 1,
      value: "",
      field: "cardNumber",
      placeholder: "4444 44444 4444 4444",
      type: "text",
      required: true,
      label: "Card Number",
      autoComplete: "off",
      validations: {
        required: "Card Number is required.",
        pattern: {
          value: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
          message: "Invalid card number.",
        },
      },
    },
    {
      id: 2,
      value: "",
      field: "cardName",
      placeholder: "Card Name",
      type: "text",
      required: true,
      label: "Card Name",
      autoComplete: "off",
      validations: {
        required: "Card Number is required.",
      },
    },
    {
      id: 3,
      value: "",
      field: "expiredDate",
      placeholder: "09/26",
      type: "text",
      required: true,
      label: "Expiry Date",
      autoComplete: "off",
      validations: {
        required: "Expiry Date is required.",
      },
    },
    {
      id: 4,
      value: "",
      field: "cvv",
      placeholder: "Cvv",
      type: "text",
      required: true,
      label: "CVV",
      autoComplete: "off",
      validations: {
        required: "CVV is required.",
      },
    },
  ],
  google: [
    {
      id: 1,
      value: "",
      field: "cardNumber",
      placeholder: "4444 44444 4444 4444",
      type: "text",
      required: true,
      label: "Card Number",
      autoComplete: "off",
      validations: {
        required: "Card Number is required.",
        pattern: {
          value: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
          message: "Invalid card number.",
        },
      },
    },
    {
      id: 2,
      value: "",
      field: "cardName",
      placeholder: "Card Name",
      type: "text",
      required: true,
      label: "Card Name",
      autoComplete: "off",
      validations: {
        required: "Card Number is required.",
      },
    },
    {
      id: 3,
      value: "",
      field: "expiredDate",
      placeholder: "09/26",
      type: "text",
      required: true,
      label: "Expiry Date",
      autoComplete: "off",
      validations: {
        required: "Expiry Date is required.",
      },
    },
    {
      id: 4,
      value: "",
      field: "cvv",
      placeholder: "Cvv",
      type: "text",
      required: true,
      label: "CVV",
      autoComplete: "off",
      validations: {
        required: "CVV is required.",
      },
    },
  ]
}