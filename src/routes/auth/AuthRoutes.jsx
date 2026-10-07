import {Routes, Route } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";


function AuthRoutes() {
    return (
        <Routes>

        {/* Page connexion*/}
        <Route path="/login" element={<Login />} />

        {/* Page inscription */}
        <Route path="/register" element={<Register />} />

        </Routes>
        
    );
}

export default AuthRoutes;