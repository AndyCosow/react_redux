import React from 'react';
import {useDispatch} from "react-redux";
import {setColor} from "../features/theme";


const SetColor = () => {
    const dispatch = useDispatch()


    function setRed() {
        dispatch(setColor("red"))
    }

    return (
        <div>
            <button onClick={setRed}>SET RED COLOR</button>
        </div>
    );
};

export default SetColor;
