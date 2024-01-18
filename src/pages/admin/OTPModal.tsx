import {FC, useCallback, useEffect, useState} from 'react';
import {Modal} from "flowbite-react";
import {AxiosResponse} from "axios";
import {Api} from "../../utils/HttpClient.ts";
import {useOTPEnable} from "../../hooks";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {Dismiss, DismissOptions} from "flowbite";
import {useBeforeUnload, useNavigate} from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {fetchAuth, logoutAction} from "../../utils/store/reducers/authSlice";
import {OTPRequest} from "../../types/request/auth/OTPRequest";
import {updateConfigAction} from "../../utils/store/reducers/configSlice";
import OTPValidation from "../../validations/auth/OTPValidation";
import {updateIsLoadingAction} from "../../utils/store/reducers/globalSlice";
import {scrollableBody} from "../../utils/Help";
import OtpInput from 'react-otp-input';


type OTPModalProp = {
    t: (key: any) => any,
}

const OTPModal: FC<OTPModalProp & any> = ({t}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userInfo} = useSelector(fetchAuth)

    //Form
    const [isErrorStoreOTP, setIsErrorStoreOTP] = useState<boolean>(false)
    const [formDirty, setFormDirty] = useState<boolean>(false)

    //Other
    const [imageUrl, setImageUrl] = useState<string>('');
    const [loadingImage, setLoadingImage] = useState<boolean>(false)
    const [currenStep, setCurrenStep] = useState<number>(1)
    const [otpModal, setOtpModal] = useState<string | undefined>('')

    const uniqueElement = document.querySelector('[aria-label="Close"]')

    const initialOTPFormValue: OTPRequest = {
        code: ''
    }

    const addOTPForm = useFormik({
        initialValues: initialOTPFormValue,
        validationSchema: OTPValidation,
        onSubmit: async (values: OTPRequest) => {
            dispatch(updateIsLoadingAction({isLoading: true}))

            setIsErrorStoreOTP(false)
            setFormDirty(false)

            mutateStoreOTP(values)
        }
    })

    const {
        mutate: mutateStoreOTP
    } = useOTPEnable(
        () => {
            dispatch(updateIsLoadingAction({isLoading: false}))

            toast.success(t('text.otp_success_stored'))

            addOTPForm.resetForm()

            setTimeout(() => {
                handleLogoutAfterOTP()
            }, 2000)
        },
        (err: any) => {
            setIsErrorStoreOTP(true)
            toast.error(err.message)
        }
    )

    useEffect(() => {
        handleDownloadImage()
    }, [])

    const handleDownloadImage = async () => {
        try {
            setLoadingImage(true)

            await new Promise((resolve) => setTimeout(resolve, 2000))

            const response: AxiosResponse = await Api("identity").get(
                `/authenticator/qr?Pixels=20`,
                {
                    responseType: "blob",
                }
            )

            if (response.status === 200) {
                const blob = new Blob([response.data], {
                    type: response.data.type,
                })
                const url = window.URL.createObjectURL(blob)

                setImageUrl(url)
            }
        } catch (error) {
            console.error('Error downloading image:', error)
        } finally {
            setLoadingImage(false)
        }
    }

    const handleLogout = () => {
        const LogoutSwal = withReactContent(Swal)

        LogoutSwal.fire({
            title: t("text.are_you_sure_?"),
            text: t("text.do_you_want_to_logout_from_system"),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: t("text.yes_logout"),
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logoutAction())
                dispatch(updateConfigAction({}))

                navigate("/login", {replace: true})
            }
        })
    }

    const handleLogoutAfterOTP = () => {
        const LogoutAfterOTPSwal = withReactContent(Swal)

        LogoutAfterOTPSwal.fire({
            title: t('label.Au'),
            text: 'System will logout in 3 seconds.',
            timer: 3000,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading()
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                dispatch(logoutAction())
                dispatch(updateConfigAction({}))

                navigate("/login", {replace: true})
            }
        })
    }

    const handleAddCurrentStep = () => {
        setCurrenStep(() => currenStep + 1)
    }

    const handleRemoveCurrentStep = () => {
        setCurrenStep(() => currenStep - 1)
    }

    const handleSaveOTP = () => {
        addOTPForm.submitForm()
    }

    const handleCloseOTPEnabler = useCallback(() => {
        setOtpModal(undefined)
        scrollableBody()
    }, [otpModal])

    useEffect(() => {
        const $targetEl: HTMLElement | null =
            document.getElementById("message-alert")
        const $triggerEl: HTMLElement | null = document.getElementById(
            "dismissing-message-alert"
        )
        const options: DismissOptions = {
            transition: "transition-opacity",
            duration: 300,
            timing: "ease-out",
            onHide: () => {
                setIsErrorStoreOTP(false)
            },
        }

        new Dismiss($targetEl, $triggerEl, options)
    })

    useEffect(() => {
        if (userInfo.authenticatorEnabled) {
            handleCloseOTPEnabler()
        } else {
            setOtpModal("open")
        }
    }, [])

    useEffect(() => {
        if (isErrorStoreOTP) {
            const timeoutId = setTimeout(() => {
                dispatch(updateIsLoadingAction({isLoading: false}))
            }, 500)

            return () => clearTimeout(timeoutId)
        }
    }, [isErrorStoreOTP])

    useEffect(() => {
        setFormDirty(addOTPForm.dirty)
    }, [addOTPForm.dirty])

    useBeforeUnload(
        useCallback(
            (e) => {
                if (formDirty) {
                    e.preventDefault()
                    e.returnValue = ""
                }
            },
            [formDirty]
        )
    )

    useEffect(() => {
        if (uniqueElement) {
            uniqueElement.classList.add('hidden')
        }
    })

    return (<Modal show={otpModal === 'open'}
                   size="2xl"
                   onClose={handleCloseOTPEnabler}
        >
            <Modal.Header>{t('label.enable_otp')}</Modal.Header>
            <Modal.Body>
                {currenStep === 1 && <div>
                    <div className="grid place-items-center">
                        {loadingImage ? <div className="text-center">
                            <div role="status">
                                <svg aria-hidden="true"
                                     className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div> : <div>
                            <div
                                className="flex justify-center items-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border border-white">
                                <img src={imageUrl} alt="Downloaded Image" className="w-[350px] p-3"/>
                            </div>

                            <div
                                id="alert-additional-content-5"
                                className="p-4 mt-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
                                role="alert"
                            >
                                <div className="flex items-center">
                                    <svg
                                        className="flex-shrink-0 w-4 h-4 me-2 dark:text-gray-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                    </svg>
                                    <span className="sr-only">{t('text.information')}</span>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                                        {t('text.information')}
                                    </h3>
                                </div>
                                <div className="mt-4 mb-4 text-sm text-gray-800 dark:text-gray-300">
                                    {t('text.information_qr')}
                                    <br/>
                                    <br/>
                                    <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=id&gl=US">{t('label.playstore')}</a>
                                    <br/>
                                    <a href="https://apps.apple.com/id/app/google-authenticator/id388497605?l=id">{t('label.appstore')}</a>
                                    <br/>
                                    <a href="https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai">{t('label.chrome_extension')}</a>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>}

                {currenStep === 2 && <div>
                    <form
                        onSubmit={addOTPForm.handleSubmit}
                        className="space-y-4 md:space-y-6 w-full">
                        <div className="flex justify-center items-center">
                            <OtpInput
                                value={addOTPForm.values.code!}
                                onChange={(otp: any) => addOTPForm.setFieldValue('code', otp)}
                                numInputs={6}
                                inputType="number"
                                renderSeparator={<span className="w-4"></span>}
                                renderInput={(props: any) => <input {...props} />}
                                inputStyle={{
                                    borderRadius: "8px",
                                    width: "54px",
                                    height: "54px",
                                    fontSize: "20px",
                                    color: "#111827",
                                    fontWeight: "400",
                                    caretColor: "blue",
                                    display: "block",
                                    padding: "0.625rem",
                                    borderWidth: "1px",
                                    borderColor: "blue",
                                    backgroundColor: "#ffffff",
                                    paddingLeft: 20,
                                    paddingRight: 20
                                }}/>
                        </div>
                    </form>
                </div>}
            </Modal.Body>
            <Modal.Footer className="flex justify-between items-end">
                <div>
                    <button
                        onClick={handleLogout}
                        className="btn-primary">
                        {t('label.log_out')}
                    </button>
                </div>
                <div className="flex justify-end items-end gap-3">
                    {currenStep !== 1 && (
                        <>
                            <button
                                onClick={handleRemoveCurrentStep}
                                className="btn-primary">
                                {t('label.previous')}
                            </button>
                        </>
                    )}
                    <button
                        onClick={currenStep === 1 ? handleAddCurrentStep : handleSaveOTP}
                        className="btn-primary">
                        {currenStep === 1 ? t('label.next') : t('label.save')}
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}


export default OTPModal
