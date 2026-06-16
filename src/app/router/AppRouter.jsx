import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import LoginPage from "../../modules/auth/pages/LoginPage";
import DashboardPage from "../../modules/dashboard/pages/DashboardPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta raíz → Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;