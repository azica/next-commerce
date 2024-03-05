"use client"

import type { ReactNode } from "react"
import { ApolloProvider } from "@apollo/client"
import { ThemeProvider } from "@material-tailwind/react"
import { SessionProvider } from "next-auth/react"
import client from "@/apollo/client"
import { customTheme } from "@/styles/global"
import { Session } from "next-auth"

type Props = {
  children: ReactNode;
  session: Session | null;
};

const Providers: React.FC<Props> = ({ children, session }) => {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ThemeProvider theme={customTheme}>
          {children}
        </ThemeProvider>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default Providers
