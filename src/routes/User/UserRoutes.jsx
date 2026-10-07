import { Routes, Route } from "react-router-dom";

import Home from "../../pages/public/Home";
import CalculZakat from "../../pages/public/CalculZakat";
import Impact from "../../pages/public/Impact";

import Register from "../../pages/auth/Register";
import Login from "../../pages/auth/Login";


import DonationType from "../../pages/public/DonationType";
import Cause from "../../pages/public/Cause";
import Landing from "../../pages/public/Landing";
import CampaignDetails from "../../pages/public/CampaignDetails";

function UserRoutes() {
  return (
    <Routes>

        {/* Page d'accueil */}
        <Route index element={<Landing />} />

        {/* Page d'accueil */}
        <Route path="/home" element={<Home />} />

        {/* Page Calcul de Zakat */}
        <Route path="/calculer-zakat" element={<CalculZakat />} />
        
        {/* Page Choix d'une Cause */}
          <Route path="/cause" element={<Cause />} />

        {/* Page Type de Donation */}
        <Route path="/type" element={<DonationType /> } />

        <Route path="/details" element={<CampaignDetails /> } />

          

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