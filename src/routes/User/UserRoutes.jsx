import {Routes, Route } from "react-router-dom";
import Home from "../../pages/public/Home";
import CalculZakat from "../../pages/public/CalculZakat";
// import Donation from "../../pages/public/Donation";
import Impact from "../../pages/public/Impact";
function UserRoutes() {
  return (
      <Routes>

        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Page Calcul de Zakat */}
        <Route path="/calculer-zakat" element={<CalculZakat />} />
        
        {/* Page Donation
        <Route path="/don" element={<Donation /> } /> */}

        {/* Page Impact */}
          <Route path="/impact" element={<Impact />} />

      </Routes>
  );
}

export default UserRoutes;