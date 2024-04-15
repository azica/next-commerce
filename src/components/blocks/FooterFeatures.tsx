"use client"
import { usePathname } from "next/navigation";

import { footerFeaturesData } from "@/shared/mockdata/footerData";

import Container from "../layout/Container";
import IconWrapper from "../ui/IconWrapper";

const FooterFeatures = () => {

    const pathname = usePathname()
    const showHeader = pathname === "/signin"
    if (showHeader) {
        return null
    }
    return (
        <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 py-10">
            {footerFeaturesData.map((item, idx) => (
                <div key={idx} className="flex sm:block gap-5">
                    <IconWrapper icon={item.icon} size={50} strokeWidth={1} />
                    <div>
                        <h6 className="mt-0 sm:mt-3 mb-1 font-bold">{item.title}</h6>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </Container>
    )
}

export default FooterFeatures;