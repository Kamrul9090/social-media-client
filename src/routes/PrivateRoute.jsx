import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    const location = useLocation();

    if (loader) {
        return <PacmanLoader></PacmanLoader>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;