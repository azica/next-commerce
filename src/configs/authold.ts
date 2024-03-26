import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

import { API_AUTH } from "@/shared/constants"

export const authOldConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        CredentialsProvider({
            id: "login",
            name: "Login",
            type: "credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "email@email.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const res = await fetch(`${API_AUTH}/auth/login`, {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" }
                    })
                    const user = await res.json()

                    if (!res.ok) {
                        throw new Error(user.message || "Signup is failed")
                    }
                    return user
                } catch (error: any) {
                    throw new Error(error.message || "Signup is failed")
                }
            },
        }),
        CredentialsProvider({
            id: "signup",
            name: "Signup",
            type: "credentials",
            credentials: {
                name: { label: "name", type: "text", placeholder: "Your Name" },
                email: { label: "email", type: "email", placeholder: "email@email.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                try {
                    const res = await fetch(`${API_AUTH}/users`, {
                        method: 'POST',
                        body: JSON.stringify({ ...credentials, avatar: "https://picsum.photos/800" }),
                        headers: { "Content-Type": "application/json" }
                    })
                    const user = await res.json()

                    if (!res.ok) {
                        throw new Error(user.message || "Signup is failed")
                    }
                    return user
                } catch (error: any) {
                    throw new Error(error.message || "Signup is failed")
                }

            },
        }),
    ],
    pages: {
        signIn: "/signin"
    },
    callbacks: {
        async jwt({ token, user, account }) {
            return { ...token, ...user };
            // if (user && token && Math.floor(Date.now() / 1000) > (account?.expires_at || token.exp - 60)) {
            //   try {
            //     const res = await fetch(`${API_AUTH}/auth/refresh-token`, {
            //       method: 'POST',
            //       headers: {
            //         "Content-Type": "application/json",
            //       },
            //       body: JSON.stringify({ refreshToken: token.refreshToken }),
            //     })
            //     const data = await res.json()
            //     console.log("refresh", data)
            //     if (res.ok && data) {
            //       // Update the token with the refreshed one
            //       return {
            //         ...token,
            //         ...data
            //       }
            //     }
            //   } catch (error) {

            //     console.error("Error refreshing token:", error)
            //   }
            // }
            // return token
        },
        async session({ session, token }) {
            // if (token) {
            //   try {
            //     console.log("token", token)
            //     const res = await fetch(`${API_AUTH}/auth/profile`, {
            //       headers: {k
            //         Authorization: `Bearer ${token.accessToen}`,
            //       },
            //     });

            //     const userProfile = await res.json();
            //     console.log(userProfile)
            //     session.user = userProfile;

            //   } catch (error) {
            //     console.error("Error fetching user profile:", error);
            //   }
            // }
            //   session.user = token;
            return session;
        },
    }
}
