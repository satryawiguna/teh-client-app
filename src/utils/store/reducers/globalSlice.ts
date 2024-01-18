import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from "@reduxjs/toolkit";
import {GlobalState} from "../../../interfaces/GlobalState";
import {UpdateIsLoadingAction} from "../../../types/actions/global/UpdateIsLoadingAction";
import {UpdateIsDarkAction} from "../../../types/actions/global/UpdateIsDarkAction";
import {UpdateLangAction} from "../../../types/actions/global/UpdateLangAction";
import {RootState} from "../index";
import {UpdateReadMeAction} from "../../../types/actions/global/UpdateReadMeAction";

const initialState: GlobalState = {
    title: 'TehGroupClient',
    description: 'Teh group client portal system',
    isLoading: false,
    isDark: false,
    lang: 'en',
    rememberMe: false
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        updateIsLoadingAction: (state, action: PayloadAction<UpdateIsLoadingAction>) => {
            const {isLoading} = action.payload

            return {
                ...state,
                isLoading,
            }
        },
        updateIsDarkAction: (state, action: PayloadAction<UpdateIsDarkAction>) => {
            const {isDark} = action.payload

            return {
                ...state,
                isDark,
            }
        },
        updateLangAction: (state, action: PayloadAction<UpdateLangAction>) => {
            const {lang} = action.payload

            return {
                ...state,
                lang,
            }
        },
        updateRememberMeAction: (state, action: PayloadAction<UpdateReadMeAction>) => {
            const {rememberMe} = action.payload
            
            return {
                ...state,
                rememberMe,
            }
        }
    }
})

export const {
    updateIsLoadingAction,
    updateIsDarkAction,
    updateLangAction,
    updateRememberMeAction
} = globalSlice.actions

export const fetchGlobal = (state: RootState) => state.global

export default globalSlice.reducer
