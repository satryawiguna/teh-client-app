import {useMutation} from "@tanstack/react-query";
import {UserService} from "../services/UserService";

const useUploadAvatar = (onSuccess: (res: any) => void,
                         onError: (err: any) => void) => {
    return useMutation({
        mutationFn: UserService.uploadAvatar,
        onSuccess: onSuccess,
        onError: onError
    })
}

const useUpdateAvatar = (onSuccess: (res: any) => void,
                         onError: (err: any) => void) => {
    return useMutation({
        mutationFn: UserService.updateAvatar,
        onSuccess: onSuccess,
        onError: onError
    })
}

export {
    useUploadAvatar,
    useUpdateAvatar
}
