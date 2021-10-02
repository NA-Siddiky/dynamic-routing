import React from 'react';

import { useParams } from "react-router-dom";
import useSingleLoad from '../Hooks/useSingleLoad';

const Friend = () => {

    const { id } = useParams();
    const [user, setUser] = useSingleLoad(id);

    console.log(user);

    return (
        <div>
            <h1>User Name: {user.username}</h1>
            <h3>Friend ID:{id}</h3>
            <p>Show More: {user.website}</p>
        </div>
    );
};

export default Friend;