import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

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
        const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
  
        console.log(user)
        if (res.ok && user) {
          return user
        }
        return null
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
        const res = await fetch("https://api.escuelajs.co/api/v1/users/", {
          method: 'POST',
          body: JSON.stringify({...credentials, avatar: "https://picsum.photos/800"}),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
        if (res.ok && user) {
          return user
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/signin"
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // If the token is expired, refresh it
      if (user && token && Math.floor(Date.now() / 1000) > (token.exp - 60)) {
        try {
          const res = await fetch("URL_TO_REFRESH_TOKEN_ENDPOINT", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              // Add your authorization header if needed
            },
            body: JSON.stringify({ refreshToken: token.refreshToken }), // Send the refresh token
          })
          const data = await res.json()
          if (res.ok && data) {
            // Update the token with the refreshed one
            return {
              ...token,
              ...data
            }
          }
        } catch (error) {
          // Handle error
          console.error("Error refreshing token:", error)
        }
      }
      return token
    },
    async session({ session, token, user }) {
      session.user = token as Response.Tokens & Model.User

      return session;
    },
  }
}
