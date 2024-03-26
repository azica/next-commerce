import { AuthOptions, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

import { API_AUTH } from "@/shared/constants"
import { getProfile, refreshAccessToken } from "@/shared/helpers/auth"


export const authConfig: AuthOptions = {
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
            throw new Error(user.message || "Signin is failed")
          }
          const accessTokenExpires = Date.now() + (1 * 60 * 60 * 1000);
          return {
            ...user,
            accessTokenExpires
          }
        } catch (error: any) {
          throw new Error(error.message || "Signin is failed")
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

      if (token && typeof token.accessTokenExpires === 'number' && token.accessTokenExpires > Date.now()) {
        return token; // Token is still valid, no need to refresh
      }
      const session = await getServerSession();
      const accessToken = await refreshAccessToken(session?.user?.refresh_token as string);
      if (accessToken) {
        return {
          ...token,
          ...user,
          accessToken,
          accessTokenExpires: Date.now() + (1 * 60 * 60 * 1000)
        };
      } else {
        return {
          ...token,
          ...user
        };
      }

    },
    async session({ session, token }) {
      if (token && token.access_token) {
        const user = await getProfile(token.access_token as string);
        session.user = user;
      }
      console.log("token", session)
      return session;
    },
  },
}

