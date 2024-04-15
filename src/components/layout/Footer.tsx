"use client"
import { IconButton, Input, Typography } from "@material-tailwind/react";
import { ArrowRight, Envelope } from "akar-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LogoWhite } from "@/assets"
import { creditCards, footerAddress, footerLinks, socialLinks } from "@/shared/mockdata/footerData";

import Container from "./Container";
import IconWrapper from "../ui/IconWrapper";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    const pathname = usePathname()
    const showHeader = pathname === "/signin"
    if (showHeader) {
        return null
    }

    return (
        <footer className="bg-primary-500 text-white/75 pt-20">
            <Container className="flex justify-center md:justify-between pb-8 flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/4 mb-5 md:mb-0">
                    <LogoWhite className="mb-5" />
                    <ul className="flex gap-3 flex-col">
                        {footerAddress.map((el, addressIndex) => (
                            <Typography key={addressIndex} as="li">
                                <Link href={el.link} className="flex gap-2 items-center text-base">
                                    <IconWrapper icon={el.icon} className="w-5 h-5" strokeWidth={1.5} />
                                    {el.label}
                                </Link>
                            </Typography>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/3 mb-5 md:mb-0">
                    <div className="flex gap-3">
                        {footerLinks.map(({ title, links }, key) => (
                            <div key={key} className="w-full">
                                <Typography
                                    className="mb-4 font-bold text-white"
                                >
                                    {title}
                                </Typography>
                                <ul className="flex flex-col gap-3">
                                    {links.map((link, key) => (
                                        <Typography key={key} as="li">
                                            <a
                                                href="#"
                                                className="font-normal"
                                            >
                                                {link}
                                            </a>
                                        </Typography>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/4 mb-5 md:mb-0">
                    <Typography className="mb-4 font-bold text-white">
                        Subscribe
                    </Typography>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, expedita?</p>
                    <div className="w-full mt-4 relative flex">
                        <Envelope strokeWidth={1.5} size={20} className="absolute left-2 top-[0.6rem]" color="white" />
                        <Input
                            type="email"
                            placeholder="Email Address"
                            className="text-white placeholder:text-white placeholder:opacity-100 pl-8 focus:border-white"
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px] border-white" }}
                        />
                        <IconButton variant="text" className="!absolute right-1">
                            <ArrowRight strokeWidth={1.5} size={20} color="white" />
                        </IconButton>
                    </div>
                </div>
            </Container>
            <hr className="border-gray-500" />
            <Container className="py-4 flex justify-between items-center flex-wrap md:flex-nowrap">
                <ul className="flex gap-3 w-full sm:w-1/2 md:w-auto order-2 md:order-1 justify-center sm:justify-start mb-5 md:mb-0">
                    {creditCards.map((card, cardIndex) => (
                        <Typography key={cardIndex} as="li" className="w-10 h-8">
                            <IconWrapper icon={card.icon} />
                        </Typography>
                    ))}
                </ul>
                <div className="text-center w-full order-1 md:order-2 mb-5 md:mb-0">
                    <Typography>
                        &copy; {currentYear} AzicaKcl.Co Al Right are reserved
                    </Typography>
                </div>
                <ul className="flex gap-3 justify-center sm:justify-end w-full sm:w-1/2 md:w-auto order-3">
                    {socialLinks.map((el, socialIndex) => (
                        <Typography key={socialIndex} as="li">
                            <Link href="">
                                <IconWrapper
                                    icon={el.icon}
                                    className="w-5 h-5 text-white hover:fill-purple-500 transition-all" />
                            </Link>
                        </Typography>
                    ))}
                </ul>
            </Container>
        </footer>
    )
}

export default Footer