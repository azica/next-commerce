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
            <Container className="flex justify-between pb-8">
                <div className="w-1/4">
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
                <div className="w-1/3">
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
                <div className="w-1/4">
                    <Typography className="mb-4 font-bold text-white">
                        Subscribe
                    </Typography>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, expedita?</p>
                    <div className="w-full mt-4 relative flex">
                        <Envelope strokeWidth={1.5} size={20} className="absolute left-2 top-[0.6rem]" color="white" />
                        <Input
                            placeholder="Your Email"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            className="pl-8"
                            containerProps={{
                                className: "min-w-0 border-white",
                            }} />
                        <IconButton variant="text" className="!absolute right-1">
                            <ArrowRight strokeWidth={1.5} size={20} color="white" />
                        </IconButton>
                    </div>
                </div>
            </Container>
            <hr className="border-gray-500" />
            <Container className="py-4 flex justify-between items-center">
                <ul className="flex gap-3">
                    {creditCards.map((card, cardIndex) => (
                        <Typography key={cardIndex} as="li" className="w-10 h-6">
                            <IconWrapper icon={card.icon} />
                        </Typography>
                    ))}
                </ul>
                <div className="flex-1 text-center">
                    <Typography className="">
                        &copy; {currentYear} AzicaKcl.Co Al Right are reserved
                    </Typography>
                </div>
                <ul className="flex gap-3 items-center justify-end">
                    {socialLinks.map((el, socialIndex) => (
                        <Typography key={socialIndex} as="li">
                            <Link href="">
                                <IconWrapper icon={el.icon} className="w-5 h-5 text-white hover:fill-purple-500 transition-all" />
                            </Link>
                        </Typography>
                    ))}
                </ul>
            </Container>

        </footer>
    )
}

export default Footer