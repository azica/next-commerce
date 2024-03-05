import type { Metadata } from "next"

import { Jost } from "next/font/google"

import "./globals.css"
import Transition from "@/components/blocks/Transition"
import Header from "@/components/layout/Header"
import Providers from "@/components/layout/Providers"
import { Session } from "next-auth"

const jost = Jost({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Next-Ecommerce",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
  session
}: Readonly<{
  children: React.ReactNode;
  session: Session | null;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Providers session={session}>
          <Header />
          <main>
            <Transition>{children}</Transition>
          </main>
        </Providers>
      </body>
    </html>
  )
}
