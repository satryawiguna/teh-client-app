import {UserInfo} from '../types/UserInfo';

export interface AuthState {
    userInfo: UserInfo
    accessToken: string
    refreshToken: string
    isLogged: boolean
}
