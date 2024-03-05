"use client"

import { Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"

import InputAdornment from "./InputAdorment"

const Input = ({
  value,
  helperText,
  onChange,
  onKeyDown,
  field,
  id,
  type,
  label,
  required,
  placeholder,
  invalid,
  endAdornment,
  startAdornment,
  mask,
  readOnly,
  minLength,
  maxLength,
  disabled,
  maskProps = {},
  autoComplete,
  textarea,
}: Input) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isInvalid, setIsInvalid] = useState(invalid ? invalid : false)
  const [errorMessage, setErrorMessage] = useState(helperText ? helperText : "")
  const idForHelperText = `helper-text-${field}`
  const idForInput = `${field}-${id}`
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type
  const adornment = endAdornment ? (
    endAdornment
  ) : type === "password" ? (
    <InputAdornment show={showPassword} onChange={setShowPassword} />
  ) : null

  useEffect(() => {
    if (invalid !== isInvalid && invalid !== undefined) {
      setIsInvalid(invalid)
    }
  }, [invalid])

  useEffect(() => {
    if (helperText && helperText !== errorMessage) {
      setErrorMessage(helperText)
    }
  }, [helperText])

  useEffect(() => {
    checkValidityOfLength(`${value}`)
  }, [value])

  const checkValidityOfLength = (value: string) => {
    const valueLength = value.length
    if (valueLength > 0 && (minLength || maxLength)) {
      let message = "Вводимое значение не должно быть"

      if (minLength) {
        message = `${message} меньше ${minLength}`
      }
      if (maxLength) {
        message = `${message} больше ${maxLength}`
      }

      setErrorMessage(message)

      if ((maxLength && valueLength > maxLength) || (minLength && valueLength < minLength)) {
        if (valueLength > 0) setIsInvalid(true)
      } else {
        setIsInvalid(false)
      }
    }
  }

  const changeValue = (event: { target: { name: string; value: string; id: string | number } }) => {
    const { name, value, id } = event.target
    onChange({ field: name, value, id })
  }

  const commonInputProps = {
    id: idForInput,
    "aria-describedby": idForHelperText,
    name: field,
    fullWidth: true,
    required,
    placeholder,
    value,
    readOnly,
    inputProps: {
      readOnly,
      minLength,
      maxLength,
    },
    onChange: changeValue,
    onKeyDown,
    autoComplete,
    ...textarea,
  }
  return (
    <div>
      {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
           {label}
          </Typography>
          <Input
              placeholder={commonInputProps.placeholder}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={{}}
              id={commonInputProps.id}
              value={commonInputProps.value}
              field={commonInputProps.name}
          />
                <Typography
                variant="small"
                color="gray"
                className="mt-2 flex items-center gap-1 font-normal"
            >
         {errorMessage}
      </Typography> */}
    </div>
  )
}

export default Input
