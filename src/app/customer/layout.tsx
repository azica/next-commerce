import { getServerSession } from "next-auth"
import { Suspense } from "react";

import UserProfile from "@/components/blocks/UserProfile";
import Container from "@/components/layout/Container"
import SideBar from "@/components/layout/SideBar"
import SideMenu from "@/components/layout/SideMenu"
import { authConfig } from "@/configs/auth.config"

import AdminLoading from "./loading"

const AdminLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const session = await getServerSession(authConfig);

    return (
        <Container className="flex gap-10 mb-20">
            <SideMenu>
                {session && session.user ? <UserProfile name={session.user.name} imageUrl={session.user.avatar} /> : null}
                <hr className="py-5" />
                <SideBar />
            </SideMenu>
            <Suspense fallback={<AdminLoading />}>
                {children}
            </Suspense>
        </Container>
    )
}
export default AdminLayout
