import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;