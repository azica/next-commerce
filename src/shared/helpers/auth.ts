import { API_AUTH } from "../constants";

export const refreshAccessToken = async (refresh_token: string) => {
    console.log("refreshs", refresh_token)
    try {
        const response = await fetch(`${API_AUTH}/auth/refresh-token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken: refresh_token }),
        });

        if (!response.ok) {
            throw new Error("Failed to refresh access token");
        }

        const refreshedTokens = await response.json();
        return { access_token: refreshedTokens.access_token, refresh_token: refreshedTokens.refresh_token };
    } catch (error) {
        console.log("Error refreshing access token:", error);
        return { error: "RefreshAccess_tokenError" };
    }
};

export const getProfile = async (refresh_token: string, access_token: string) => {

    let res = await fetch(`${API_AUTH}/auth/profile`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    if (res.status === 401) {
        const { access_token: newAccessToken, refresh_token: newRefreshToken } = await refreshAccessToken(refresh_token);

        res = await fetch(`${API_AUTH}/auth/profile`, {
            headers: {
                Authorization: `Bearer ${newAccessToken}`,
            },
        });

        if (res.ok) {
            const profileData = await res.json();
            return { access_token: newAccessToken, refresh_token: newRefreshToken, profileData };
        } else {
            console.error("Failed to fetch profile data after token refresh");
            return { error: "FetchProfileDataError" };
        }
    }

    if (res.ok) {
        const profileData = await res.json();
        return { access_token, refresh_token, profileData };
    } else {
        console.error("Failed to fetch profile data");
        return { error: "FetchProfileDataError" };
    }
};
