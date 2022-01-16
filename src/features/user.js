import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            name: "",
            age: 0,
            email: ""
        }
    },
    reducers: {
        // state holds current info about state
        // action has payload key with data which was passed by
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = {
                name: "",
                age: 0,
                email: ""
            }
        }
    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer;
