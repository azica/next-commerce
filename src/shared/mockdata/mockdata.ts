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
