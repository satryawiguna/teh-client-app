import {FC} from "react";

type LabelProp = {
    t: (key: any) => any
    id: string
    value: string
    htmlFor?: string
    className?: string
}

const Label: FC<LabelProp> = ({
                                  t,
                                  id,
                                  value,
                                  htmlFor,
                                  className
                              }) => {
    return <label
        id={id}
        {...(htmlFor && {htmlFor: htmlFor})}
        {...(className && {className: className})}
    >
        {t(value)}
    </label>
}

export default Label
