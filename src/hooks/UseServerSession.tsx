"use server"

import { getServerSession } from "next-auth";

export const useGetServerSession = async () => {

    if (typeof window === "undefined") {
        // Server-side context, return null or handle differently
        return null;
    }

    try {
        // Client-side context, use getSession from next-auth
        const session = await getServerSession();
        console.log("Session:", session);
        return session;
    } catch (error) {
        console.error("Error fetching session:", error);
        throw error;
    }
};
