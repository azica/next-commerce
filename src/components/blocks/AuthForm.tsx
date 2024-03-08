"use client"
import type { FC } from "react"

import { Input, Checkbox, Button, Typography, Spinner } from "@material-tailwind/react"
import { EyeSlashed, EyeOpen } from "akar-icons"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useForm } from "react-hook-form"

import { GoogleButton } from "./GoogleButton"


type FormValues = {
  email: string;
  password: string;
  name: string;
};

type AuthForm = {
  inputs: InputData[];
  buttonText: string;
  hasAccount: boolean;
  setHasAccount: () => void;
  setForgetPassword: () => void;
  forgetPassword: boolean;
};
const AuthForm: FC<AuthForm> = ({ hasAccount, setHasAccount, inputs, buttonText, setForgetPassword, forgetPassword }) => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const toggleIcon = () => {
    return showPassword ? (
      <EyeSlashed strokeWidth={1.5} size={20} onClick={() => setShowPassword(false)} className="cursor-pointer" />
    ) : (
      <EyeOpen strokeWidth={1.5} size={20} onClick={() => setShowPassword(true)} className="cursor-pointer" />
    )
  }

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true)
    try {
      const response = hasAccount ?
        await signIn("login", {
          email: data.email,
          password: data.password,
          redirect: false,
        })
        : await signIn("signup", {
          name: data.name,
          email: data.email,
          password: data.password,
          redirect: false,
        })

      response && response.status === 200 && router.push('/')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <form className="mt-8 mb-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-1 flex flex-col gap-6">
        {inputs?.map((input) => (
          <div key={input.id} className="relative">
            {input.type !== "checkbox" ? (
              <>
                <Typography className="mb-2 font-medium text-xs text-primary-500">{input.label}</Typography>
                <Input
                  {...register(input.field as keyof FormValues, input.validations)}
                  size="lg"
                  name={input.field}
                  type={input.type === "password" ? (showPassword ? "text" : "password") : input.type}
                  icon={input.type === "password" && toggleIcon()}
                  placeholder={input.placeholder}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </>
            ) : (
              <Checkbox
                name={input.field}
                label={
                  <Typography className="flex items-center font-normal text-primary-500">
                    {input.label}
                    <a href="#" className="font-semibold transition-colors hover:text-gray-900">
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-3" }}
              />
            )}
            {errors?.[input.field as keyof FormValues] && (
              <Typography className="text-purple-400 text-xs absolute -bottom-5 transition-all duration-300">
                {errors[input.field as keyof FormValues]?.message}
              </Typography>
            )}
          </div>
        ))}
      </div>
      {hasAccount && !forgetPassword ? (
        <div className="flex justify-between items-center text-primary-500">
          <Checkbox label={<Typography>Remember Me</Typography>} containerProps={{ className: "-ml-3" }} crossOrigin={undefined} />
          <Typography className="text-sm cursor-pointer" onClick={setForgetPassword}>
            Forgot Password?
          </Typography>
        </div>
      ) : null}
      <Button className="mt-6 flex items-center gap-2 justify-center mb-4" fullWidth type="submit">
        {isLoading ? <Spinner className="h-4 w-4" /> : null}
        {buttonText}
      </Button>
      <GoogleButton />
      <Typography className="mt-4 text-center font-normal">
        Already have an account?
        <a href="#" className="font-semibold text-gray-900 ml-1" onClick={setHasAccount}>
          Sign In
        </a>
      </Typography>
    </form>
  )
}

export default AuthForm
