import {FC, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import InputField from "../components/molecules/InputField";
import {LoginRequest} from "../types/request/auth/LoginRequest";
import {useFormik} from "formik";
import LoginValidation from "../validations/auth/LoginValidation";
import {fetchGlobal, updateIsLoadingAction, updateRememberMeAction} from "../utils/store/reducers/globalSlice";
import {setHeaderAuthorization} from "../utils/HttpClient";
import {GenericObjectResponseType} from "../types/response/common/GenericObjectResponseType";
import {useLogin} from "../hooks";
import {loginAction} from "../utils/store/reducers/authSlice";
import {LoginResponse} from "../types/response/auth/LoginResponse";
import Button from "../components/atoms/Button";
import Label from "../components/atoms/Label";
import Debug from "../components/molecules/Debug";
import {errorDefault} from "../hooks/useError";
import Alert from "../components/atoms/Alert";
import {Dismiss, DismissOptions} from "flowbite";
import {BiSolidMessageX} from "react-icons/bi";

type LoginPageProp = {
    t: (key: any) => any
}

const LoginPage: FC<LoginPageProp> = ({
                                          t
                                      }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isLoading, rememberMe} = useSelector(fetchGlobal)

    // Initial State
    const [initialLoginFormValue, setInitialLoginFormValue] = useState<LoginRequest>({
        email: "",
        password: "",
        rememberMe: false,
        otp: null
    })
    // Error State
    const [isErrorLogin, setIsErrorLogin] = useState<boolean>(false)
    const [errorLogin, setErrorLogin] = useState<any>()

    // Functions
    const handleRememberMe = useCallback(
        () => {
            dispatch(updateRememberMeAction({rememberMe: !rememberMe}))

            loginForm.setFieldValue('rememberMe', rememberMe)
        },
        [rememberMe])

    const {
        mutate: mutateLogin
    } = useLogin(
        (res: GenericObjectResponseType<LoginResponse>) => {
            dispatch(updateIsLoadingAction({isLoading: false}))
            dispatch(loginAction({
                userInfo: {
                    userId: res.result.userId,
                    secondaryId: res.result.secondaryId,
                    fullName: res.result.fullName,
                    email: res.result.email,
                    profileImageUrl: res.result.profileImageUrl,
                    roles: res.result.roles,
                    policies: res.result.policies,
                    authenticatorEnabled: res.result.authenticatorEnabled
                },
                accessToken: res.result.tokens.accessToken,
                refreshToken: res.result.tokens.refreshToken
            }))

            setHeaderAuthorization(res.result.tokens.accessToken)

            setTimeout(() => {
                navigate("/admin/dashboard", {replace: true})
            }, 1000)
        },
        (err: any) => {
            dispatch(updateIsLoadingAction({isLoading: false}))

            if (err.status === 422) {
                navigate("/otp", {
                    state: {
                        email: loginForm.values.email,
                        password: loginForm.values.password
                    },
                });
            } else {
                errorDefault(t, err)

                setErrorLogin(err)
                setIsErrorLogin(true)
            }
        }
    )

    const loginForm = useFormik({
        initialValues: initialLoginFormValue,
        validationSchema: LoginValidation,
        enableReinitialize: true,
        onSubmit: async (values: LoginRequest) => {
            dispatch(updateIsLoadingAction({isLoading: true}))

            setIsErrorLogin(false)

            mutateLogin(values)
        },
    })

    useEffect(() => {
        if (isErrorLogin) {
            const $targetEl: HTMLElement | null = document.getElementById("message_alert")
            const $triggerEl: HTMLElement | null = document.getElementById("dismissing_message_alert")
            const options: DismissOptions = {
                transition: "transition-opacity",
                duration: 300,
                timing: "ease-out",
                onHide: () => {
                    setIsErrorLogin(false)
                },
            }

            new Dismiss($targetEl, $triggerEl, options)
        }
    })

    useEffect(() => {
        if (isErrorLogin) {
            const timeoutId = setTimeout(() => {
                dispatch(updateIsLoadingAction({isLoading: false}))
            }, 500);

            return () => clearTimeout(timeoutId)
        }
    }, [isErrorLogin])

    useEffect(() => {
        setInitialLoginFormValue((prev) => ({...prev, rememberMe: rememberMe}))
    }, [rememberMe])

    return (<section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                TehGroup<span className="text-blue-600 dark:text-blue-500">Client</span>
            </h1>
            {isErrorLogin && <Alert t={t}
                                    className="w-full sm:max-w-md"
                                    dismiss={true}
                                    icon={<BiSolidMessageX/>}
                                    message={errorLogin}/>}
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {t("text.signin_to_your_account")}
                    </h1>
                    <form
                        onSubmit={loginForm.handleSubmit}
                        className="space-y-4 md:space-y-6"
                    >
                        {/*Email*/}
                        <InputField t={t}
                                    id="email"
                                    name="email"
                                    placeholder="label.email"
                                    label="label.email"
                                    onChange={loginForm.handleChange}
                                    onBlur={loginForm.handleBlur}
                                    value={loginForm.values.email}
                                    touched={loginForm.touched.email}
                                    errors={loginForm.errors.email}
                        />

                        {/*Password*/}
                        <InputField t={t}
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="label.password"
                                    label="label.password"
                                    onChange={loginForm.handleChange}
                                    onBlur={loginForm.handleBlur}
                                    value={loginForm.values.password}
                                    touched={loginForm.touched.password}
                                    errors={loginForm.errors.password}
                        />

                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <InputField t={t}
                                                id="rememberMe"
                                                name="rememberMe"
                                                type="checkbox"
                                                onChange={handleRememberMe}
                                                checked={rememberMe}/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <Label t={t}
                                           id="remember_me"
                                           className="text-gray-500 dark:text-gray-300"
                                           value="label.remember_me"/>
                                </div>
                            </div>
                            <Link
                                to={"/forgot-password"}
                                className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-300"
                            >
                                {t("label.forgot_password")}
                            </Link>
                        </div>
                        <Button t={t}
                                id="sign_in"
                                name="signIn"
                                type="submit"
                                className="btn-default default"
                                isLoading={isLoading}
                                value="label.sign_in"/>
                    </form>
                    {import.meta.env.MODE === "development" && (<Debug t={t}
                                                                       params={[
                                                                           {
                                                                               name: "loginForm.values",
                                                                               value: loginForm.values
                                                                           },
                                                                       ]}
                                                                       columns={1}/>)}
                </div>
            </div>
        </div>
    </section>)
}

export default LoginPage
