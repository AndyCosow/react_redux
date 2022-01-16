import {createSlice} from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name: "color",
    initialState: {
        value: {
            color: "gray"
        }
    },
    reducers: {
        setColor: (state, action) => {
            state.value.color = action.payload
        },
    }
})

export const {setColor} = colorSlice.actions

export default colorSlice.reducer;
