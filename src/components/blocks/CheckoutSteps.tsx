"use client"

import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { HomeAlt1, CreditCardAlt1, Receipt } from "akar-icons";
import { Fragment, useState } from "react";

import Payment from "./Payment";
import Review from "./Review";
import Shipping from "./Shipping";

const CheckoutSteps = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const steps = [
        { title: "Shipping Address", icon: <HomeAlt1 />, children: <Shipping /> },
        { title: "Payment Method", icon: <CreditCardAlt1 />, children: <Payment /> },
        { title: "Review Your Order", icon: <Receipt />, children: <Review /> },
    ]

    return (
        <div className="w-full py-4 realtive">
            {
                steps.map((step, idx) => (
                    <Typography variant="h2" className={`${activeStep === idx ? "visible" : "hidden"} my-4 pb-4`} key={idx}>
                        {step.title}
                    </Typography>
                ))
            }

            <Stepper
                className="mb-10"
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                {steps.map((step, idx) => (
                    <Step onClick={() => setActiveStep(idx)} key={idx}>
                        {step.icon}
                    </Step>
                ))}
            </Stepper>

            {steps.map((step, idx) => (
                <div className={`${activeStep === idx ? "visible" : "hidden"}`} key={idx}>
                    {step.children}
                </div>
            ))}

            <div className="mt-16 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                    Continue
                </Button>
            </div>
        </div>
    )
}

export default CheckoutSteps