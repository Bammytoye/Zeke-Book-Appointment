import { useState } from "react";
import { apiFetch } from "../lib/utils";

export default function AdminLogin({ onSuccess }) {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const login = async () => {
        if (!user || !pass) {
            setError("Enter username and password.");
            return;
        }

        setError("");
        setLoading(true);
        try {
            const data = await apiFetch("/auth/login", {
                method: "POST",
                body: JSON.stringify({ username: user, password: pass }),
            });
            localStorage.setItem("adminToken", data.token);
            onSuccess();
        } catch (err) {
            setError(err.message || "Invalid credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4">
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-3xl p-10 shadow-2xl backdrop-blur">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 text-center">
                    Admin Login
                </h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl mb-4 bg-slate-800 border border-slate-700 text-slate-100"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl mb-4 bg-slate-800 border border-slate-700 text-slate-100"
                />
                {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
                <button
                    onClick={login}
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition"
                >
                    {loading ? "Signing in…" : "Sign In"}
                </button>
            </div>
        </div>
    );
}