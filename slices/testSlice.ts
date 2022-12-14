import { ActionCreatorWithoutPayload, createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        funcIncrement: (state: CounterState) => {
            state.value += 1
        }
    }
})

export const { funcIncrement, } = counterSlice.actions

export default counterSlice.reducer