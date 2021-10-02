import React from 'react';
import Friend from '../Friend/Friend';
import useLoad from '../Hooks/useLoad';
import { useHistory } from "react-router-dom";

const Friends = () => {

    let history = useHistory();

    function handleClick(id) {
        history.push(`/friend/${id}`);
    }

    const [users, setUsers] = useLoad();

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap: '10px',

    }

    return (
        <div>
            <h1>All Friends</h1>
            <div style={gridStyle}>
                {
                    users.map(friend => (
                        <div key={friend.id} style={{ border: '2px solid green', borderRadius: '10px' }}>
                            <h1>{friend.name}</h1>
                            <p>{friend.email}</p>
                            <button onClick={() => handleClick(friend.id)}>Detail</button>
                        </div>
                    ))
                }
            </div>



        </div>
    );
};

export default Friends;