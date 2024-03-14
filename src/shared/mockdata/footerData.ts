"use client"
import { Phone, Envelope, Location, FacebookFill, GoogleContainedFill, LinkedinBoxFill } from "akar-icons";

import Amex from "@/assets/icons/amex.svg"
import GooglePay from "@/assets/icons/google-pay.svg"
import MasterCard from "@/assets/icons/mastercard.svg"
import Paypal from "@/assets/icons/paypal.svg"
import VisaCard from "@/assets/icons/visa.svg"
export const footerLinks = [
    {
        title: "Information",
        links: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
        title: "Service",
        links: ["Overview", "Features", "Solutions", "Tutorials"],
    },
]
export const footerAddress = [
    { icon: Phone, label: "509 990129" },
    { icon: Envelope, label: "azicakcl@gamil.com" },
    { icon: Location, label: "Kyrgyzstan, Kant" },
]

export const socialLinks = [
    { icon: FacebookFill },
    { icon: LinkedinBoxFill },
    { icon: GoogleContainedFill }
]

export const creditCards = [
    { icon: VisaCard },
    { icon: MasterCard },
    { icon: Paypal },
    { icon: GooglePay },
    { icon: Amex }

]