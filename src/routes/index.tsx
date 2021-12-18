import {BrowserRouter, Routes, Route} from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

import {PrivateRoute, FreeRoute} from "./PrivateRoute";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FreeRoute/>}>
                    <Route path="/" element={<SignIn/>}/>
                </Route>
                <Route path="/signup" element={<FreeRoute/>}>
                    <Route path="/signup" element={<SignUp/>}/>
                </Route>
                <Route path="/dashboard" element={<PrivateRoute/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;