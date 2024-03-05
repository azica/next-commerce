import type { MouseEvent } from "react"

import { Input } from "@material-tailwind/react"
import { EyeSlashed, EyeOpen } from "akar-icons"

interface InputAdornmentProps {
  show: boolean;
  onChange: (val: boolean) => void;
}

const InputAdornment = ({ show, onChange }: InputAdornmentProps) => {
  const handleClickShowPassword = () => onChange(!show)
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <div className="w-72">
      <Input
        onClick={handleClickShowPassword}
        label="Input With Icon"
        icon={show ? <EyeSlashed strokeWidth={1.5} size={20} /> : <EyeOpen strokeWidth={1.5} size={20} />}
      />
    </div>
  )
}

export default InputAdornment
