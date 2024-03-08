"use client";

import { IconButton } from "@material-tailwind/react";

const SizeList = () => {
    return (
        <div className="flex gap-2">
            {["S", "M", "L", "XL", "XXL"].map((size, idx) => (
                <IconButton variant="outlined" key={idx} size="sm">
                    <span className="text-sm">{size}</span>
                </IconButton>
            ))}
        </div>
    );
}

export default SizeList;
