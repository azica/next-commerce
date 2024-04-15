import { HomeAlt1, CreditCardAlt1, Receipt, Person, Heart, ShippingBoxV1, Bell, Gear, Location, ShippingBoxV2, SignOut } from "akar-icons"

export const menu = [
  { href: "/shop", label: "Shop" },
  { href: "/admin", label: "Admin" },
  { href: "/our-story", label: " Our Story" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
]

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

export const steps = [
  { title: "Shipping Address", icon: HomeAlt1, link: "shipping" },
  { title: "Payment Method", icon: CreditCardAlt1, link: "payment" },
  { title: "Review Your Order", icon: Receipt, link: "review" },
]

export const sortOptions = [
  { value: "latest", label: "Sort by latest" },
  { value: "newest", label: "Sort by newest" },
  { value: "a-b", label: "Sort by A - B" },
  { value: "b-a", label: "Sort by B - A" },
]

export const sideBar = [
  { icon: Person, label: "Personal Information", link: "dashboard" },
  { icon: ShippingBoxV1, label: "My Orders", link: "orders" },
  { icon: Heart, label: "My WishList", link: "wishlist" },
  { icon: Location, label: "Manage Addresses", link: "addresses" },
  { icon: CreditCardAlt1, label: "Saved Cards", link: "cards" },
  { icon: Bell, label: "Notifications", link: "notifications" },
  { icon: Gear, label: "Settings", link: "settings" },

]

export const profileMenuItems = [
  {
    label: "My Profile",
    icon: Person,
    link: "dashboard"
  },
  {
    label: "Edit Profile",
    icon: Gear,
    link: "settings"
  },
  {
    label: "Orders",
    icon: ShippingBoxV2,
    link: "orders"
  },
  {
    label: "Sign Out",
    icon: SignOut,
  },
];

export const tabsData = [
  {
    label: "Descriptions",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia nobis totam corporis eligendi earum modi adipisci repellendus ex maxime quisquam."
  },
  {
    label: "Additional Information",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia nobis totam corporis eligendi earum modi adipisci repellendus ex maxime quisquam."
  },
  {
    label: "Reviews",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia nobis totam corporis eligendi earum modi adipisci repellendus ex maxime quisquam."
  },
]