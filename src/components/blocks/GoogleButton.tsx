"use client"

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { Button } from "@material-tailwind/react"

const GoogleButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/profile"

  return (
    <Button onClick={() => signIn("google", { callbackUrl })} type="button" variant="outlined" fullWidth>
      Sign in with Google
    </Button>
  )
}

export { GoogleButton }