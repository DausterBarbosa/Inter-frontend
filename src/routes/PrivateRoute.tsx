import {Navigate, Outlet} from "react-router-dom";

import {isAuthenticated} from "../services/auth";

export const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet/> : <Navigate to="/"/>;
}

export const FreeRoute = () => {
    return isAuthenticated() ? <Navigate to="/dashboard"/> : <Outlet/>;
}
