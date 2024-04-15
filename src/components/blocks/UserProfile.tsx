"use client"
import { Avatar, Typography } from "@material-tailwind/react";
import { RockOn } from "akar-icons";

const UserProfile = ({ name, imageUrl }: { name: string; imageUrl?: string }) => {

    return (
        <div className="flex gap-3 py-4">
            {imageUrl ? <Avatar src={imageUrl} alt="avatar" size="lg" /> : null}
            <div>
                <Typography className="flex gap-2 items-center">Hello <RockOn strokeWidth={1.5} size={25} className="text-yellow" /></Typography>
                <Typography variant="h5">{name}</Typography>
            </div>
        </div>
    )
}

export default UserProfile