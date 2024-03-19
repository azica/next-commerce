import { Phone, Envelope, Location, FacebookFill, GoogleContainedFill, LinkedinBoxFill, CreditCard, Headphone, Money, ShippingBoxV2 } from "akar-icons";

import { MasterCard, VisaCard, MaestroCard, AmexCard, PaypalCard } from "@/assets/images/creditCards";

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
    { icon: Phone, label: "+996 509 990 129", link: "tel:996-509-990-129" },
    { icon: Envelope, label: "azicakcl@gmail.com", link: "mailto:azicakcl@gmail.com" },
    { icon: Location, label: "Kyrgyzstan, Kant", link: "#" },
]

export const socialLinks = [
    { icon: FacebookFill },
    { icon: LinkedinBoxFill },
    { icon: GoogleContainedFill }
]

export const creditCards = [
    { icon: VisaCard },
    { icon: MasterCard },
    { icon: PaypalCard },
    { icon: AmexCard },
    { icon: MaestroCard }
]

export const footerFeaturesData = [
    {
        icon: ShippingBoxV2,
        title: "Free Shipping",
        description: "Free shipping for order above $150"
    },
    {
        icon: Money,
        title: "Money Guarantee",
        description: "Within 30 days for an exchange"
    },
    {
        icon: Headphone,
        title: "Online Support",
        description: "24 hours a day, 7 days"
    },
    {
        icon: CreditCard,
        title: "Flexible Payment",
        description: "Pay with multiple credit card"
    },
]