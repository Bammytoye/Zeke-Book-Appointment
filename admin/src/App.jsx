import { useState, useEffect } from "react";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsAuth(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuth(false);
  };

  return (
    <>
      {isAuth ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <AdminLogin onSuccess={() => setIsAuth(true)} />
      )}
    </>
  );
}