import { API_URL } from "../constants";

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


export const getQueryString = (searchParams: URLSearchParams, limit?: string): string => {
    const paramsObj: Record<string, string> = {offset: "0", limit: limit || "15", };
    for (const [key, value] of Array.from(searchParams.entries())) {
        if( key === "page") {
            paramsObj.offset = String(Number(value) * 6)
        } else {
            paramsObj[key] = value;
        }     
    }
    return new URLSearchParams(paramsObj).toString();
  };
  
 export const fetcher = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};