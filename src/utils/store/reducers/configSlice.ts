import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from "@reduxjs/toolkit";
import {UpdateConfigAction} from "../../../types/actions/config/UpdateConfigAction";
import {RootState} from "../index";

const initialState: any = {}

export const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        updateConfigAction: (state, action: PayloadAction<UpdateConfigAction>) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const {
    updateConfigAction
} = configSlice.actions

export const fetchConfig = (state: RootState) => state.config;

export default configSlice.reducer
