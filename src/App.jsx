import UserRoutes from "./routes/User/UserRoutes";
import AdminRoutes from "./routes/Admin/AdminRoutes";
import AuthRoutes from "./routes/auth/AuthRoutes";
function App() {
  return (

    <>
    
    <UserRoutes />

      <AdminRoutes />

      <AuthRoutes /> 
      
    </>
      
  );
}

export default App;