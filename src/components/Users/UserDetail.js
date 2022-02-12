import React from 'react';import { useParams } from "react-router-dom";

function UserDetail(props) {
    
    const { userId } = useParams();
    return (
        <div>
            <h2>Page under construction</h2>
            <p>User id from params: {userId}</p>
        </div>
    );
}

export default UserDetail;