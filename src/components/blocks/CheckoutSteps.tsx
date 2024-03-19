"use client"

import { Stepper, Step, Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState, } from "react";

import { steps } from "@/shared/mockdata/mockdata";

import IconWrapper from "../ui/IconWrapper";
import Spinner from '../ui/Spinner';

const CheckoutSteps = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const matchingStepIndex = steps.findIndex(step => pathname.endsWith(step.link));
        if (matchingStepIndex !== -1) {
            setActiveStep(matchingStepIndex);
        }
    }, [pathname, steps]);

    if (!pathname.includes("/", 1)) return children

    return (
        <div className="w-full py-4 realtive">
            {
                steps.map((step, idx) => (
                    <Typography variant="h2" className={`${activeStep === idx ? "visible" : "hidden"} my-4 pb-4 font-normal`} key={idx}>
                        {step.title}
                    </Typography>
                ))
            }

            <Stepper
                className="mb-10"
                activeStep={activeStep}
            >
                {steps.map((step, idx) => (
                    <Step className="rounded-lg" key={idx}>
                        <IconWrapper icon={step.icon} />
                    </Step>
                ))}
            </Stepper>
            <div className="relative">
                {children}
            </div>
        </div>
    )
}

export default CheckoutSteps