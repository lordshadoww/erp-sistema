// src/app/router/AppRouter.jsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import LoginPage from "@/modules/auth/pages/LoginPage";
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";

// layouts
import AuthLayout from "@/app/AuthLayout/AuthLayout";

// guards
import PrivateRoute from "@/app/guards/PrivateRoute";
import PublicRoute from "@/app/guards/PublicRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Root */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            </PublicRoute>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}