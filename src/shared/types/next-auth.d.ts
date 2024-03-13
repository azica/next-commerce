import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: Response.Tokens & Model.User & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        exp: numberss
    }
}