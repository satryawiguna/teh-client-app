import * as Yup from "yup";

const SendResetPasswordValidation = Yup.object({
    email: Yup.string()
        .email('error.invalid_email_format')
        .required('error.identity_required')
})

export default SendResetPasswordValidation
