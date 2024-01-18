import {toast} from "react-toastify";

const errorDefault = (t: (key: any) => any,
                      err: any) => {

    if (err.hasOwnProperty('errors')) {
        const errors = err.errors;

        if (Array.isArray(errors)) {
            errors.forEach((error: any) => toast.error(t(error)))
        } else {
            Object.keys(errors).forEach((key) => toast.error(t(errors[key])))
        }
    }

    if (err.hasOwnProperty('error') && typeof err.error === 'string') {
        const error = err.error

        toast.error(t(error))
    }
}

export {
    errorDefault
}
