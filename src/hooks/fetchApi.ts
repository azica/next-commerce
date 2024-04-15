import { getServerSession } from "next-auth";

import { authConfig } from "@/configs/auth.config";
import { API_AUTH } from "@/shared/constants";


async function refreshToken(refreshToken: string) {
    const res = await fetch(API_AUTH + "/auth/refresh-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            refresh: refreshToken,
        }),
    });
    const data = await res.json();

    return data.accessToken;
}

export async function AuthGetApi(url: string) {
    const session = await getServerSession(authConfig);
    console.log("before: ", session?.user.access_token);

    let res = await fetch(API_AUTH + url, {
        method: "GET",
        headers: {
            Authorization: `bearer ${session?.user.access_token}`,
        },
    });

    if (res.status == 401) {
        if (session) session.user.access_token = await refreshToken(session?.user.access_token ?? "");
        console.log("after: ", session?.user.access_token);

        res = await fetch(API_AUTH + url, {
            method: "GET",
            headers: {
                Authorization: `bearer ${session?.user.access_token}`,
            },
        });
        return await res.json();
    }

    return await res.json();
}