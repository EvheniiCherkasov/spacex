import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./Slices/UserSlices"

export const Store = configureStore({
    reducer: {
        user: UserReducer,
    },
})