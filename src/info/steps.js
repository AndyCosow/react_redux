// npm i redux react-redux @reduxjs/toolkit

// index.js => import {configureStore} from "@reduxjs/toolkit";

// add reducer
// index.js =>
//const store = configureStore({
//     reducer: {}
// })

// index.js =>
// import {Provider} from "react-redux";
//

// index.js =>
// wrap App in to Provider, give provider store attribute add store const as value

// create folder features
// create reducer file (user.js for example)
// in to file => import {createSlice} from "@reduxjs/toolkit";
// write all code, export function, export reducer
// import reducer to index.js

// to use reducers in component => import useSelector from "react-redux"
// create const and make its value to be => useSelector((state) => state.user.value)
// now you can access user object in JSX and user name, age, email keys

// to use actions in user.js reducer file
// export const {login} = userSlice.actions
// import import {useDispatch} from "react-redux"; in Login.js
// import {login} from "../features/user"
// (action which was exported)


// useSelector => access values
// useDispatch => dispatch values




