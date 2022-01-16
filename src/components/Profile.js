import React from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    const user = useSelector((state) => state.user.value)
    const color = useSelector((state) => state.color.value.color)

    return (
        <div style={{backgroundColor: color}}>
            <h1>Profile page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email} </p>
        </div>
    );
};

export default Profile;
