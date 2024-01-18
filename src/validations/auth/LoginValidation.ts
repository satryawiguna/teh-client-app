import * as Yup from "yup";

const LoginValidation = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('error.email_required'),
    password: Yup.string()
        .min(8, 'error.password_must_has_minimum_8_characters')
})

export default LoginValidation
