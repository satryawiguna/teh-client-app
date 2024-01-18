import {combineReducers} from "redux";
import globalReducer from "./reducers/globalSlice";
import authReducer from "./reducers/authSlice";
import configReducer from "./reducers/configSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import {configureStore, ConfigureStoreOptions} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    global: globalReducer,
    auth: authReducer,
    config: configReducer
})

const persistConfig = {
    key: 'KEY',
    storage,
    whiteList: [],
    blackList: [],
    version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const storeConfig: ConfigureStoreOptions = {
    reducer: persistedReducer,
    devTools: import.meta.env.MODE !== 'production',
    middleware: [thunk]
}

export const store = configureStore(storeConfig)
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
