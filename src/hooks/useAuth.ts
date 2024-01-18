import {useMutation, useQuery} from "@tanstack/react-query";
import {AuthService} from "../services/AuthService";
import {RefreshTokenRequest} from "../types/request/auth/RefreshTokenRequest";

const useLogin = (onSuccess: (res: any) => void,
                  onError: (err: any) => void) => {
    return useMutation({
        mutationFn: AuthService.login,
        onSuccess: onSuccess,
        onError: onError
    });
}

const useRefreshToken = (body: RefreshTokenRequest) => {
    return useQuery({
        queryKey: ['refresh-token', body],
        queryFn: AuthService.refreshToken
    })
}

const useSendResetPassword = (onSuccess: (res: any) => void,
                              onError: (err: any) => void) => {
    return useMutation({
        mutationFn: AuthService.sendResetPassword,
        onSuccess: onSuccess,
        onError: onError
    })
}

const useOTPEnable = (onSuccess: (res: any) => void,
                      onError: (err: any) => void) => {
    return useMutation({
        mutationFn: AuthService.enableOTPAuthenticator,
        onSuccess: onSuccess,
        onError: onError
    })
}

const useOTPDisable = (onSuccess: (res: any) => void,
                       onError: (err: any) => void) => {
    return useMutation({
        mutationFn: AuthService.disableOTPAuthenticator,
        onSuccess: onSuccess,
        onError: onError
    })
}


export {
    useLogin,
    useRefreshToken,
    useSendResetPassword,
    useOTPEnable,
    useOTPDisable,
}
