// Import necessary modules
import React, { FC } from "react";

interface IconWrapperProps {
    size?: number;
    strokeWidth?: number;
    icon: React.ComponentType<any> | string;
    className?: string;
}

const IconWrapper: FC<IconWrapperProps> = ({ icon: IconComponent, className, strokeWidth, size }) => {

    if (IconComponent) {

        if (typeof IconComponent === "string") {
            return <img src={IconComponent} alt="icon" className={className} />;
        }

        else {
            return <IconComponent className={className} strokeWidth={strokeWidth} size={size} />;
        }
    }

    else {
        return null;
    }
};

export default IconWrapper;
