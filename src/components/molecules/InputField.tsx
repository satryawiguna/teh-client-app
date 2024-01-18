import React, {FC} from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import ErrorText from "../atoms/ErrorText";
import {FormikErrors, FormikTouched} from "formik";
import {InputType} from "../../types/common/InputType";

type InputFieldProp = {
    t: (key: any) => any
    id: string
    name: string
    type?: InputType
    placeholder?: string
    value?: string | readonly string[] | number
    shadow?: boolean
    checked?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
    touched?: boolean | FormikTouched<any> | FormikTouched<any>[]
    errors?: string | string[] | FormikErrors<any> | FormikErrors<any>[]
    label?: string
}

const InputField: FC<InputFieldProp> = ({
                                            t,
                                            id,
                                            name,
                                            type,
                                            placeholder,
                                            value = "",
                                            shadow,
                                            checked,
                                            onChange,
                                            onBlur,
                                            touched,
                                            errors,
                                            label = ""
                                        }) => {
    let inputClassName

    if (type !== 'checkbox') {
        if (shadow) {
            inputClassName = `input-shadow ${(touched && errors) && `error`}`
        } else {
            inputClassName = `input-default ${(touched && errors) && `error`}`
        }
    } else {
        inputClassName = 'input-checkbox'
    }

    return (<div className="input">
        {label && <Label t={t}
                         id={label}
                         value={t(label)}
                         htmlFor={name}
                         className="label"/>}
        <Input t={t}
               id={id}
               name={name}
               {...(type && {type: type})}
               className={inputClassName}
               {...(placeholder && {placeholder: placeholder})}
               {...(type !== 'checkbox' && {value: value})}
               {...(type === 'checkbox' && {checked: checked})}
               {...(onChange && {onChange: onChange})}
               {...(onBlur && {onBlur: onBlur})}/>
        {(touched && errors) && <ErrorText message={t(errors)}/>}
    </div>)
}

export default InputField
