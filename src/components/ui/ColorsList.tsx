"use client"

import { IconButton } from "@material-tailwind/react"
import { SquareFill } from "akar-icons"

const ColorsList = ({ colors }: { colors: string[] }) => {
    return <div className="flex gap-2">
        {colors.map((color, idx) => (
            <IconButton key={idx} variant="outlined" className="border-none" size="sm">
                <SquareFill strokeWidth={0} size={38} color={color} />
            </IconButton>
        ))}
    </div>
}

export default ColorsList;