import React from 'react';
import Friend from '../Friend/Friend';
import useLoad from '../Hooks/useLoad';

const Friends = () => {

    const [users, setUsers] = useLoad();
    console.log(users);

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
                        </div>
                    ))
                }
            </div>



        </div>
    );
};

export default Friends;