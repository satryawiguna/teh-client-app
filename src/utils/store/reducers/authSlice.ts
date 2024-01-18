import {AuthState} from "../../../interfaces/AuthState";
import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from "@reduxjs/toolkit";
import {LoginAction} from "../../../types/actions/auth/LoginAction";
import {UpdateUserInfoAction} from "../../../types/actions/auth/UpdateUserInfoAction";
import {UpdateTokensAction} from "../../../types/actions/auth/UpdateTokensAction";
import {UpdateProfileImageUrlAction} from "../../../types/actions/auth/UpdateProfileImageUrlAction";
import {RootState} from "../index";

const initialState: AuthState = {
    userInfo: {
        userId: '',
        secondaryId: '',
        fullName: '',
        email: '',
        profileImageUrl: '',
        roles: [],
        policies: [],
        authenticatorEnabled: false
    },
    accessToken: '',
    refreshToken: '',
    isLogged: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAction: (state, action: PayloadAction<LoginAction>) => {
            const {userInfo, accessToken, refreshToken} = action.payload

            return {
                ...state,
                userInfo, accessToken, refreshToken,
                isLogged: true
            }
        },
        logoutAction: () => initialState,
        updateUserInfoAction: (state, action: PayloadAction<UpdateUserInfoAction>) => {
            const {userInfo} = action.payload

            return {
                ...state,
                userInfo
            }
        },
        updateTokensAction: (state, action: PayloadAction<UpdateTokensAction>) => {
            const {accessToken, refreshToken} = action.payload

            return {
                ...state,
                accessToken, refreshToken
            }
        },
        updateProfileImageUrlAction: (state, action: PayloadAction<UpdateProfileImageUrlAction>) => {
            const {userInfo} = action.payload

            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    profileImageUrl: userInfo.profileImageUrl
                }
            }
        }
    },
})

export const {
    loginAction,
    logoutAction,
    updateUserInfoAction,
    updateTokensAction,
    updateProfileImageUrlAction
} = authSlice.actions

export const fetchAuth = (state: RootState) => state.auth

export default authSlice.reducer
