import {GenericObjectResponseType} from "../types/response/common/GenericObjectResponseType";
import {RefreshTokenResponse} from "../types/response/auth/RefreshTokenResponse";
import {QueryFunctionContext} from "@tanstack/react-query";
import {RefreshTokenRequest} from "../types/request/auth/RefreshTokenRequest";
import {AxiosResponse} from "axios";
import {Api} from "../utils/HttpClient";
import {OTPRequest} from "../types/request/auth/OTPRequest";
import {LoginRequest} from "../types/request/auth/LoginRequest";
import {LoginResponse} from "../types/response/auth/LoginResponse";
import {SendResetPasswordRequest} from "../types/request/auth/SendResetPasswordRequest";

export class AuthService {
    static async login(request: LoginRequest): Promise<GenericObjectResponseType<LoginResponse>> {
        const response: AxiosResponse = await Api("identity").post("/authentication/login", request);

        return response.data;
    }

    static async refreshToken(request: QueryFunctionContext<[string, RefreshTokenRequest]>): Promise<GenericObjectResponseType<RefreshTokenResponse>> {
        const [body] = request.queryKey

        const response: AxiosResponse = await Api("identity").post("/authentication/refresh-token", body);

        return response.data;
    }

    static async sendResetPassword(request: SendResetPasswordRequest): Promise<boolean> {
        const response: AxiosResponse = await Api("identity").post("/authentication/forgot-password", request);

        return response.data;
    }

    static async enableOTPAuthenticator(request: OTPRequest): Promise<boolean> {
        const response: AxiosResponse = await Api("identity").post("/authenticator/enable", request);

        return response.data;
    }

    static async disableOTPAuthenticator(userId: string): Promise<boolean> {
        const response: AxiosResponse = await Api("identity").post(`/authenticator/disable/${userId}`);

        return response.data;
    }
}
