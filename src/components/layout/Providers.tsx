"use client"

import type { ReactNode } from "react"

import { ThemeProvider } from "@material-tailwind/react"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

import { customTheme } from "@/styles/global"

type Props = {
  children: ReactNode;
  session: Session | null;
};

const Providers: React.FC<Props> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={customTheme}>
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}

export default Providers
