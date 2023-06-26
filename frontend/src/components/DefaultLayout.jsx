import axios from 'axios';
import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

function DefaultLayout() {
    const {user,token, setUser, setToken,} = useStateContext()
    

    
    
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/user')
    //     .then(({data}) => {
    //         setUser(data)
    //     })
    // }, [])
    
    if (!token) {
        return <Navigate to='/splashscreen'/>
    }
    




    return (
        <>
            <Outlet/>
        </>
    );
}

export default DefaultLayout;