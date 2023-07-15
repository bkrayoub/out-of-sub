import React from 'react';
import { Navigate} from 'react-router-dom';

function NotFound() {
    return <Navigate to='/404'/>
}

export default NotFound;