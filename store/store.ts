import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/Auth/authSlices";

export const store = configureStore({
    reducer: {
        auth_user: AuthSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
// export type AppStore = ReturnType<RootState,>

export type AppDispatch = typeof store.dispatch