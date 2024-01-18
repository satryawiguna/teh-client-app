import React, {FC} from "react";
import {InputType} from "../../types/common/InputType";

type InputProp = {
    t: (key: any) => any
    id: string
    name: string
    type?: InputType
    className?: string
    placeholder?: string
    value?: string | readonly string[] | number
    checked?: boolean
    disable?: boolean
    readonly?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

const Input: FC<InputProp> = ({
                                  t,
                                  id,
                                  name,
                                  type = "text",
                                  className,
                                  placeholder,
                                  value,
                                  checked,
                                  disable = false,
                                  readonly = false,
                                  onChange,
                                  onBlur
                              }) => {
    return (<>
        <input id={id}
               name={name}
               type={type}
               {...(className && {className: className})}
               {...(placeholder && {placeholder: t(`${placeholder}`)})}
               {...(disable && {disabled: true})}
               {...(readonly && {readOnly: true})}
               {...(onChange && {onChange: onChange})}
               {...(onBlur && {onBlur: onBlur})}
               {...(type !== 'checkbox' && {value: value, autoComplete: 'off'})}
               {...(type === 'checkbox' && {checked: checked, 'aria-describedby': name})}/>
    </>)
}

export default Input
