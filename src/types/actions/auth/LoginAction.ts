import {UserInfo} from "../../UserInfo";

export type LoginAction = {
    userInfo: UserInfo
    accessToken: string
    refreshToken: string
}
