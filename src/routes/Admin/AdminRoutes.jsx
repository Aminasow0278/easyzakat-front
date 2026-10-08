import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../../pages/admin/AdminDashboard";
import Beneficiaries from "../../pages/admin/Beneficiaries";

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

      <Route
        path="/beneficiaries"
        element={<Beneficiaries />}
      />
    </Routes>
  );
}

export default AdminRoutes;