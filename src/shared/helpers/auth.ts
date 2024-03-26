import { getServerSession } from "next-auth";
import { JWT } from "next-auth/jwt";

import { authConfig } from "@/configs/auth.config";

import { API_AUTH } from "../constants";

export const refreshAccessToken = async (refreshToken: string) => {

    try {
        const response = await fetch(`${API_AUTH}/auth/refresh-token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken }),
        });

        if (!response.ok) {
            throw new Error("Failed to refresh access token");
        }

        const refreshedTokens = await response.json();
        return refreshedTokens.access_token;
    } catch (error) {
        console.log("Error refreshing access token:", error);
        return { error: "RefreshAccess_tokenError" };
    }


};

export const getProfile = async (accessToken: string) => {
    console.log(accessToken)
    try {
        const response = await fetch(`${API_AUTH}/auth/profile`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch user profile");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;
    }
};
