"use client"

import { Button, Card, Typography } from "@material-tailwind/react"
import { ChevronLeft } from "akar-icons"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

import register from "@/assets/images/auth.png"
import logo from "@/assets/images/Logo.png"
import AuthForm from "@/components/blocks/AuthForm"
import { authData } from "@/shared/mockdata/mockdata"

type AuthFormData = {
  title: string;
  subtitle: string;
  buttonText: string;
  inputs: InputData[];
};

const AuthContent = () => {
  const [hasAccount, setHasAccount] = useState(false)
  const [forgetPassword, setForgetPassword] = useState(false)
  const [authForm, setAuthForm] = useState<AuthFormData>({
    title: "",
    subtitle: "",
    buttonText: "",
    inputs: [],
  })

  useEffect(() => {
    if (forgetPassword) {
      setAuthForm(authData.forgetPassword)
    } else {
      setAuthForm(hasAccount ? authData.login : authData.register)
    }
  }, [hasAccount, forgetPassword])

  return (
    <div className="relative h-lvh flex items-stretch">
      <div className="w-1/2 flex">
        <Image src={register} alt="auth" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 flex justify-center items-center h-full ml-auto my-auto">
        <Link href="/" className="absolute top-5 left-5 inline-block">
          <Image src={logo} alt="logo" />
        </Link>
        <Card className="transparent w-80 max-w-screen-lg sm:w-96" shadow={false}>
          {forgetPassword ? (
            <Button
              variant="text"
              fullWidth={false}
              onClick={() => setForgetPassword(false)}
              className="mb-5 inline-flex items-center gap-2 cursor-pointer pl-0">
              <ChevronLeft strokeWidth={1.2} size={20} />
              Back
            </Button>
          ) : null}
          <Typography variant="h4" color="blue-gray">
            {authForm.title}
          </Typography>
          <Typography className="mt-1 font-normal text-gray-500">{authForm.subtitle}</Typography>
          <AnimatePresence mode="wait">
            <motion.div
              key={hasAccount ? "login" : "register"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <AuthForm
                buttonText={authForm.buttonText}
                inputs={authForm.inputs}
                hasAccount={hasAccount}
                setForgetPassword={() => setForgetPassword(true)}
                forgetPassword={forgetPassword}
                setHasAccount={() => setHasAccount(!hasAccount)}
              />
            </motion.div>
          </AnimatePresence>
        </Card>
      </div>
    </div>
  )
}

export default AuthContent
