import * as Yup from "yup";

const otpValidation = Yup.object().shape({
    code: Yup.string()
        .required('error.otp_required'),
})

export default otpValidation
