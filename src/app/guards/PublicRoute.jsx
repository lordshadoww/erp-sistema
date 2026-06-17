// src/app/guards/PublicRoute.jsx

import { Navigate } from "react-router-dom";

import useAuth from "@/modules/auth/hooks/useAuth";

export default function PublicRoute({
  children,
}) {

  const {
    isAuthenticated,
    loading,
  } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Cargando sesión...
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return children;
}