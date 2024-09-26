import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {



    const {User, loading} = useContext(AuthContext);

    // for which route i want to go after loading

    const location = useLocation()

    if (loading){

        return <span className="loading loading-infinity loading-lg"></span>
    }

    if (User) {
        return children;
    }
    return <Navigate to='/login' ></Navigate>
       
};

export default PrivateRoutes;