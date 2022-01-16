import React from 'react';
import {useDispatch} from "react-redux";
import {login, logout} from "../features/user"

const Login = () => {

    const dispatch = useDispatch()

    function makeAction() {
        const userInfo = {
            name: "Jonas",
            age: 50,
            email: "some@email.com"
        }

        dispatch(login(userInfo))
    }

    return (
        <div>
            <button onClick={makeAction}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    );
};

export default Login;
