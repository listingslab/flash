import pJSON from "../../../package.json"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FlashShape {
    data: any
}

const initialState: FlashShape = {
    data: {
        shape: 'FlashShape',
        pJSON,
        currentText: 'This is not Flash.',
    },
}

export const flashSlice = createSlice({
    name: 'flash',
    initialState,
    reducers: {
        setFlash: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.data = { ...state.data, [key]: value }
        },
    },
})

export const { setFlash } = flashSlice.actions

export default flashSlice.reducer
