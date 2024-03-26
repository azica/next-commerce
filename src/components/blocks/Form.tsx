"use client"
import { Typography, Input, Button, Select, Option } from '@material-tailwind/react'
import { Controller, FieldValues, Path, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask';

const Form = <T extends FieldValues>({
    values,
    onSubmit,
    buttonLoading,
    buttonName,
    gridCols,
}: FormProps<T>) => {

    const {
        register,
        handleSubmit: onSubmitForm,
        control,
        formState: { errors },
    } = useForm<T>();

    return (
        <form onSubmit={onSubmitForm(onSubmit)} className="flex flex-col gap-3 my-3">
            <div className={`grid gap-4 ${gridCols ? gridCols : "grid-col-2"}`}>
                {values?.map((input) => (
                    <div key={input.id + input.field} className={`relative ${input.className}`}>
                        <Typography className="mb-2 font-medium text-x text-primary-500">{input.label}</Typography>
                        {input.mask ? (
                            <Controller
                                {...register(input.field as Path<T>, input.validations)}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <InputMask mask={input.mask!} value={value} onChange={onChange}>
                                        <Input
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            size="lg"

                                        />
                                    </InputMask>
                                )}
                            />
                        ) : input.type === "select" ? (
                            <Select
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            >
                                {input.options?.map((option, idx) => (<Option key={idx}>{option.name}</Option>))}
                            </Select>
                        ) : (
                            <Input
                                {...register(input.field as Path<T>, input.validations)}
                                size="lg"
                                name={input.field}
                                type={input.type}
                                placeholder={input.placeholder}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        )}
                        {errors?.[input.field as Path<T>] && (
                            <Typography className="text-purple-400 text-xs absolute -bottom-5 transition-all duration-300">
                                {String(errors[input.field as Path<T>]?.message)}
                            </Typography>
                        )}
                    </div>
                ))}
            </div>
            <Button type="submit" className="w-1/2 mt-5" ripple={buttonLoading}>
                {buttonName}
            </Button>
        </form>
    )
}

export default Form;