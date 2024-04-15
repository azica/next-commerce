import EditProfile from "@/components/blocks/EditProfile"

const Customer = () => {

    return (
        <div className="flex w-full">
            <EditProfile user={{
                id: undefined,
                name: "",
                email: "",
                avatar: undefined,
                role: undefined,
                accessTokenExpires: 0,
                access_token: "",
                refresh_token: ""
            }} />
        </div>
    )
}

export default Customer