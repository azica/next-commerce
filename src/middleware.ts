
import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
    function middleware(req) {
        if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "customer") {
            return NextResponse.rewrite(
                new URL("/signin?message=You Are Not Authorized!", req.url)
            );
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
);

export const config = {
    matcher: ["/customer/:path*", "/user/:path*", "/checkout/shipping"],
}