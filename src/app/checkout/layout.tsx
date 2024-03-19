import { ReactNode, Suspense } from "react";

import CheckoutAside from "@/components/blocks/CheckoutAside";
import CheckoutSteps from "@/components/blocks/CheckoutSteps";
import Container from "@/components/layout/Container";

import CheckoutLoading from "./loading";

const CheckoutLayout = ({ children }: { children: ReactNode; }) => {
    return (
        <Container>
            <div className="flex gap-10">
                <div className="w-2/3 relative">
                    <Suspense fallback={<CheckoutLoading />}>
                        <CheckoutSteps>
                            {children}
                        </CheckoutSteps>
                    </Suspense>
                </div>
                <div className="w-1/3">
                    <CheckoutAside />
                </div>
            </div>
        </Container>
    );
};

export default CheckoutLayout;
