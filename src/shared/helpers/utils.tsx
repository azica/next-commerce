import { API_URL } from "@/apollo/contstants";

export const getRefreshToken = async (refreshToken: string) => {
    try {
        const refreshResponse = await fetch(`${API_URL}/api/v1/auth/refresh-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refreshToken,
            }),
        });

        if (!refreshResponse.ok) {
            throw new Error("Failed to refresh token");
        }

        return await refreshResponse.json();
    } catch (error) {
        if (!location.pathname.includes("/signin")) {
            location.href = "/signin";
        }
        console.error("Error refreshing token:", error);
        throw error;
    }
};