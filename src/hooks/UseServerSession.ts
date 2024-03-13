"use server"

import { getServerSession } from "next-auth";

export const useGetServerSession = async () => {

    if (typeof window === "undefined") {
        return null;
    }

    try {
        const session = await getServerSession();
        console.log("Session:", session);
        return session;
    } catch (error) {
        console.error("Error fetching session:", error);
        throw error;
    }
};
