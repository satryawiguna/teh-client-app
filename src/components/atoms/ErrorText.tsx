import {FC} from "react";

type ErrorTextProp = {
    message: string
}

const ErrorText: FC<ErrorTextProp> = ({
                                          message
                                      }) => {
    return (
        <p className="error-text">
            <span>{message}</span>
        </p>
    )
}

export default ErrorText
