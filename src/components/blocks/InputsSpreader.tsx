"use client"
import { Input, Select, Option } from "@material-tailwind/react";

const InputsSpreader = ({ id, type, options, value, className, ...other }: InputData) => {
    let componet;

    switch (type) {
        case "select":
            componet = (
                <Select
                    {...other}
                    id={String(id)}
                    className={className}>
                    {options?.map((option, idx) => (<Option key={idx}>{option.name}</Option>))}

                </Select>
            );
            break;
        case "text":
            componet = (
                <Input
                    {...other}
                    id={String(id)}
                    className={className}
                />
            );
            break;
    }

    return { componet };

}

export default InputsSpreader