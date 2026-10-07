import { Routes, Route } from "react-router-dom";

import Home from "../../pages/public/Home";
import CalculZakat from "../../pages/public/CalculZakat";
import Impact from "../../pages/public/Impact";

import Register from "../../pages/auth/Register";
import Login from "../../pages/auth/Login";



function UserRoutes() {
  return (
    <Routes>

      {/* Page d'accueil */}
      <Route path="/" element={<Home />} />

      {/* Calcul de Zakat */}
      <Route
        path="/calculer-zakat"
        element={<CalculZakat />}
      />

      {/* Inscription */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* Connexion */}
      <Route
        path="/login"
        element={<Login />}
      />

    

      {/* Impact */}
      <Route
        path="/impact"
        element={<Impact />}
      />

    </Routes>
  );
}

export default UserRoutes;