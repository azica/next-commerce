import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

import { API_AUTH } from "@/shared/constants"
import { getProfile } from "@/shared/helpers/auth"

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
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
            throw new Error(user.message || "Signing is failed")
          }
          const accessTokenExpires = Date.now() + (1 * 60 * 60 * 1000);
          return {
            ...user,
            accessTokenExpires
          }
        } catch (error: any) {
          throw new Error(error.message || "Signing is failed")
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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (token.access_token && token.refresh_token) {
        const { access_token, refresh_token, profileData } = await getProfile(token.refresh_token as string, token.access_token as string)
        return {
          ...profileData,
          access_token,
          refresh_token,
          accessTokenExpires: token.accessTokenExpires
        }

      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
}

