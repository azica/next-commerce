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
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as Response.Tokens & Model.User

      return session;
    },
  }
}
