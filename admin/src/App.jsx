import { useState, useEffect } from "react";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { apiFetch } from "./lib/utils";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        await apiFetch("/auth/verify", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setIsAuth(true);
      } catch (err) {
        localStorage.removeItem("adminToken");
        setIsAuth(false);
        console.error(err)
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuth(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="text-white text-xl">Verifying...</div>
      </div>
    );
  }

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