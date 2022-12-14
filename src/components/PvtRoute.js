import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PvtRoute = ()=>{
    const loggedin= localStorage.getItem('user');
    return loggedin ? <Outlet /> : <Navigate to= "login" />
}

export default PvtRoute;