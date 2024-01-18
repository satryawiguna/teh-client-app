import {FC, useCallback, useState} from "react";
import {Modal} from "flowbite-react";
import Avatar from "react-avatar-edit";
import {useDispatch, useSelector} from "react-redux";
import {useUpdateAvatar, useUploadAvatar} from "../../../hooks";
import {toast} from "react-toastify";
import moment from "moment-timezone";
import {fetchAuth, updateProfileImageUrlAction} from "../../../utils/store/reducers/authSlice";
import {fetchGlobal, updateIsLoadingAction} from "../../../utils/store/reducers/globalSlice";
import {GenericObjectResponseType} from "../../../types/response/common/GenericObjectResponseType";
import {UploadFileResponse} from "../../../types/response/elastic-email/UploadFileResponse";
import {errorDefault} from "../../../hooks/useError";
import {UpdateAvatarRequest} from "../../../types/request/user/UpdateAvatarRequest";
import {extractDataBase64String} from "../../../utils/Help";
import {UploadFileRequest} from "../../../types/request/elastic-email/UploadFileRequest";

type EditAvatarModalProp = {
    t: (key: any) => any
    editAvatarModal: string
    handleCloseEditAvatar: () => void,
}

const EditAvatarModal: FC<EditAvatarModalProp> = ({
                                                      t,
                                                      editAvatarModal,
                                                      handleCloseEditAvatar
                                                  }) => {
    const dispatch = useDispatch()

    const {userInfo} = useSelector(fetchAuth)
    const {isDark} = useSelector(fetchGlobal)

    const [source] = useState<undefined | string>(userInfo.profileImageUrl ? userInfo.profileImageUrl : undefined)
    const [preview, setPreview] = useState<string>()
    const [fileName, setFileName] = useState<string>()

    const {
        mutate: mutateAsyncUpdateAvatar
    } = useUpdateAvatar(
        () => {
            dispatch(updateIsLoadingAction({isLoading: true}))
            dispatch(updateProfileImageUrlAction({
                userInfo: {
                    profileImageUrl: `https://api.smtprelay.co/userfile/${import.meta.env.VITE_ELASTIC_EMAIL_PUBLIC_ACCOUNT_IDENTIFIER}/${fileName}`
                }
            }))

            toast.success(t("text.edit_avatar_success"))

            handleCloseEditAvatar()
        },
        (err: any) => errorDefault(t, err)
    )

    const {
        mutateAsync: mutateAsyncUploadAvatar
    } = useUploadAvatar(
        (res: GenericObjectResponseType<UploadFileResponse>) => {
            setFileName(res.result.FileName)

            const updateAvatarRequest: UpdateAvatarRequest = {
                imageUrl: `https://api.smtprelay.co/userfile/${import.meta.env.VITE_ELASTIC_EMAIL_PUBLIC_ACCOUNT_IDENTIFIER}/${res.result.FileName}`
            };

            mutateAsyncUpdateAvatar([userInfo.userId, updateAvatarRequest])
        },
        (err: any) => errorDefault(t, err)
    )

    const handleUploadAvatar = useCallback(() => {
        dispatch(updateIsLoadingAction({
            isLoading: true
        }))

        if (preview) {
            const {mimeType, extension} = extractDataBase64String(preview)
            const content = preview.split(',')[1];

            const uploadFileRequest: UploadFileRequest = {
                BinaryContent: content,
                Name: `avatar_${userInfo.userId}_${moment().format("YYYY-MM-DD_HHmmss")}.${extension}`,
                ContentType: mimeType,
            };

            mutateAsyncUploadAvatar(uploadFileRequest)
        }
    }, [preview])

    const onClose = () => {
        setPreview('')
    }

    const onCrop = (view: any) => {
        setPreview(view)
    }

    return <Modal
        show={editAvatarModal === "open"}
        size="md"
        onClose={handleCloseEditAvatar}
    >
        <Modal.Body className="dark:bg-gray-800 rounded-lg">
            <div
                className="flex flex-col items-center justify-center w-full gap-y-4">
                <Avatar width={350}
                        height={300}
                        onCrop={onCrop}
                        onClose={onClose}
                        src={source}
                        labelStyle={isDark ? {color: '#FFFFFF'} : {color: '#000000'}}/>

                <div className="grid grid-cols-2 gap-x-4">
                    <button className="btn-primary" onClick={handleCloseEditAvatar}>
                        {t("label.close")}
                    </button>
                    <button
                        className={`${!preview ? "btn-disable" : "btn-warning"} w-full lg:w-min whitespace-nowrap`}
                        onClick={handleUploadAvatar}
                        disabled={!preview}
                    >
                        {t("label.save")}
                    </button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
}

export default EditAvatarModal
