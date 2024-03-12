"use client"

import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { HomeAlt1, CreditCardAlt1, Receipt } from "akar-icons";
import { useState } from "react";

const CheckoutSteps = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);


    return (
        <div className="w-full py-4 px-8">
            <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step onClick={() => setActiveStep(0)}>
                    <HomeAlt1 strokeWidth={1.5} size={20} />
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                        <Typography
                            variant="h6"
                            color={activeStep === 0 ? "blue-gray" : "gray"}
                        >
                            Step 1
                        </Typography>
                        <Typography
                            color={activeStep === 0 ? "blue-gray" : "gray"}
                            className="font-normal"
                        >
                            Details about yout account.
                        </Typography>
                    </div>
                </Step>
                <Step onClick={() => setActiveStep(1)}>
                    <CreditCardAlt1 strokeWidth={1.5} size={20} />
                </Step>
                <Step onClick={() => setActiveStep(2)}>
                    <Receipt strokeWidth={1.5} size={20} />
                </Step>
            </Stepper>
            <div className="mt-16 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                    Next
                </Button>
            </div>
        </div>
    )
}

export default CheckoutSteps