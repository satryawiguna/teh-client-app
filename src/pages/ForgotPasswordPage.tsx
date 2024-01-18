import {Link, useBeforeUnload, useNavigate} from "react-router-dom";
import {FC, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSendResetPassword} from "../hooks";
import {errorDefault} from "../hooks/useError";
import {fetchGlobal, updateIsLoadingAction} from "../utils/store/reducers/globalSlice";
import {toast} from "react-toastify";
import {SendResetPasswordRequest} from "../types/request/auth/SendResetPasswordRequest";
import {useFormik} from "formik";
import {Dismiss, DismissOptions} from "flowbite";
import SendResetPasswordValidation from "../validations/auth/SendResetPasswordValidation";
import Alert from "../components/atoms/Alert";
import InputField from "../components/molecules/InputField";
import Button from "../components/atoms/Button";

type ForgotPasswordPageProp = {
    t: (key: any) => any
}

const ForgotPasswordPage: FC<ForgotPasswordPageProp> = ({t}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isLoading} = useSelector(fetchGlobal)

    // Initial State
    const [initialSendResetPasswordFormValue,] = useState<SendResetPasswordRequest>({
        email: '',
        landingPage: `${import.meta.env.VITE_BASE_APP_URL}/change-password`
    })
    // Error State
    const [isErrorSendResetPassword, setIsErrorSendResetPassword] = useState<boolean>(false)
    const [errorSendResetPassword, setErrorSendResetPassword] = useState<any>()
    // Other State
    const [formDirty, setFormDirty] = useState<boolean>(false)

    const {
        mutate: mutateSendResetPassword
    } = useSendResetPassword(
        () => {
            dispatch(updateIsLoadingAction({isLoading: false}))

            toast.success(t('text.password_request_change_success'));
            sendResetPasswordForm.resetForm();

            navigate("/admin/login")
        },
        (err: any) => {
            errorDefault(t, err)

            setErrorSendResetPassword(err)
            setIsErrorSendResetPassword(true)
        }
    )

    const sendResetPasswordForm = useFormik({
        initialValues: initialSendResetPasswordFormValue,
        validationSchema: SendResetPasswordValidation,
        onSubmit: async (values: SendResetPasswordRequest) => {
            dispatch(updateIsLoadingAction({isLoading: true}))

            setIsErrorSendResetPassword(false)
            setFormDirty(false)

            mutateSendResetPassword(values)
        }
    })

    useEffect(() => {
        if (isErrorSendResetPassword) {
            const $targetEl: HTMLElement | null = document.getElementById('message_alert')
            const $triggerEl: HTMLElement | null = document.getElementById('dismissing_message_alert')
            const options: DismissOptions = {
                transition: 'transition-opacity',
                duration: 300,
                timing: 'ease-out',
                onHide: () => {
                    setIsErrorSendResetPassword(false)
                }
            }

            new Dismiss($targetEl, $triggerEl, options)
        }
    })

    useEffect(() => {
        if (isErrorSendResetPassword) {
            const timeoutId = setTimeout(() => {
                dispatch(updateIsLoadingAction({isLoading: false}))
            }, 500)

            return () => clearTimeout(timeoutId)
        }
    }, [isErrorSendResetPassword])

    useEffect(() => {
        setFormDirty(sendResetPasswordForm.dirty)
    }, [sendResetPasswordForm.dirty])

    useBeforeUnload(useCallback((e) => {
            if (formDirty) {
                e.preventDefault()
                e.returnValue = ''
            }

        }, [formDirty])
    )

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                {isErrorSendResetPassword && <Alert t={t}
                                                    className="w-full sm:max-w-md"
                                                    dismiss={true}
                                                    message={errorSendResetPassword}/>}
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            {t('text.send_reset_password')}
                        </h1>
                        <form onSubmit={sendResetPasswordForm.handleSubmit} className="space-y-4 md:space-y-6">
                            <InputField t={t}
                                        id="email"
                                        name="email"
                                        placeholder="label.email"
                                        label="label.email"
                                        onChange={sendResetPasswordForm.handleChange}
                                        onBlur={sendResetPasswordForm.handleBlur}
                                        value={sendResetPasswordForm.values.email}
                                        touched={sendResetPasswordForm.touched.email}
                                        errors={sendResetPasswordForm.errors.email}/>

                            <div className="flex items-center justify-between">
                                <Button t={t}
                                        id="send_reset_password"
                                        name="sendResetPassword"
                                        type="submit"
                                        className="btn-default default"
                                        isLoading={isLoading}
                                        value="label.send_reset_password"/>
                                <Link to={"/login"}
                                      className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-300">{t('label.back_to_login')}</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPasswordPage
