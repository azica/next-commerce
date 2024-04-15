"use client"
import { ThemeProvider } from "@material-tailwind/react"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

import { customTheme } from "@/styles/global"

interface ProvidersProps {
  children: any;
  session: Session | null;
}

const Providers = ({ children, session }: ProvidersProps) => {

  return (
    <SessionProvider session={session}>
      <ThemeProvider value={customTheme}>
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}

export default Providers
