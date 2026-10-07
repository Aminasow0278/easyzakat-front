import { Routes, Route } from "react-router-dom";

import Home from "../../pages/public/Home";
import CalculZakat from "../../pages/public/CalculZakat";
import Impact from "../../pages/public/Impact";
<<<<<<< HEAD
import DonationType from "../../pages/public/DonationType";
import Cause from "../../pages/public/Cause";
import Landing from "../../pages/public/Landing";
import CampaignDetails from "../../pages/public/CampaignDetails";
=======

import Register from "../../pages/auth/Register";
import Login from "../../pages/auth/Login";


>>>>>>> 18b5976ca6ea726a4c5da91f510043eb099596c1

function UserRoutes() {
  return (
    <Routes>

<<<<<<< HEAD
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

          
=======
      {/* Page d'accueil */}
      <Route path="/" element={<Home />} />

      {/* Calcul de Zakat */}
      <Route
        path="/calculer-zakat"
        element={<CalculZakat />}
      />
>>>>>>> 18b5976ca6ea726a4c5da91f510043eb099596c1

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