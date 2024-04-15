import { DefaultSession } from "next-auth";


declare module "next-auth" {
    interface Session extends DefaultSession {
        user: Model.User;
        error?: string;
    }
}
declare module "next-auth/jwt" {
    interface JWT {
        user: Model.User;
        accessToken?: string;
        refreshToken?: string;
    }
}