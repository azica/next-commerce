import { Suspense } from "react"

import AuthContent from "@/components/blocks/AuthContent"
import Spinner from "@/components/blocks/Spinner"

const Auth = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthContent />
    </Suspense>
  )
}
export default Auth
