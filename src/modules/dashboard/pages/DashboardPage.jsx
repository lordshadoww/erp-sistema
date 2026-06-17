// src/modules/dashboard/pages/DashboardPage.jsx

import useAuth from "@/modules/auth/hooks/useAuth";

export default function DashboardPage() {

  const {
    user,
    logout,
  } = useAuth();

  return (
    <div className="p-10 text-white">
      <h1>
        Bienvenido {user?.name}
      </h1>

      <button
        onClick={logout}
        className="mt-4 rounded bg-red-500 px-4 py-2"
      >
        Cerrar sesión
      </button>
    </div>
  );
}