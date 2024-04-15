"use client"
import { Avatar, Button, IconButton } from "@material-tailwind/react"
import { Edit } from "akar-icons"

import { profileValues } from "@/shared/mockdata/formData"

import Form from "./Form"

const EditProfile = ({ user }: { user: Model.User }) => {

    const submitHandle = (data: Model.User) => {
        console.log(data)
    }

    const updateImage = () => {
        console.log("ss")
    }
    return (
        <div>
            <div className="flex justify-between">
                <div className="flex gap-2 items-end">
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt={user.name}
                        src={user.avatar}
                    />
                    <IconButton
                        variant="text"
                        onClick={updateImage}
                    >
                        <Edit strokeWidth={1.5} size={20} />
                    </IconButton>
                </div>
                <Button variant="filled">
                    <Edit strokeWidth={1.5} size={20} /> Edit Profile
                </Button>
            </div>
            <Form
                values={profileValues}
                onSubmit={submitHandle}
                buttonName="Edit Profile"
                buttonLoading={false}
            />
        </div>
    )
}

export default EditProfile