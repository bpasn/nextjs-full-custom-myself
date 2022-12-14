import { ActionCreatorWithoutPayload, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";

import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    authUser: SignIn | null | [],
    value: number
}
export interface SignIn {
    email: string,
    password: string
}
export interface SignUp {
    email: string,
    password: string,
    username: string,
    firstname: string,
    lastname: string,
    birthday?: string,
    sex?: string
}
const initialState: AuthState = {
    value: 0,
    authUser: localStorage.getItem("auth_user") ? JSON.parse(typeof localStorage.getItem("auth_user") == 'string' ? typeof localStorage.getItem("auth_user") : '') : []

}

export const AuthSlice = createSlice({
    name: "auth_user",
    initialState,
    reducers: {
        funcIncrement: (state: AuthState) => {
            state.value += 1
        },
        signIn: (user: any) => (state: AuthState, action: any) => {
            console.log(action)
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action: PayloadAction) => {
            return {
                ...state,
                ...action
            }
        }
    }
})

export const { funcIncrement, signIn } = AuthSlice.actions

export default AuthSlice.reducer