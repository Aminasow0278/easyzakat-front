import { Routes, Route } from "react-router-dom";

import Home from "../../pages/public/Home";
import CalculZakat from "../../pages/public/CalculZakat";
import Impact from "../../pages/public/Impact";
import DonationType from "../../pages/public/DonationType";
import Cause from "../../pages/public/Cause";
import Landing from "../../pages/public/Landing";
import CampaignDetails from "../../pages/public/CampaignDetails";
import Register from "../../pages/auth/Register";
import Login from "../../pages/auth/Login";

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

        {/* Page Details */}
        <Route path="/details" element={<CampaignDetails /> } />

      {/* Impact */}
        <Route path="/impact" element={<Impact /> } />

    


    </Routes>
  );
}

export default UserRoutes;