//src/app/providers/AuthProvider.jsx


import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  loginRequest,
} from "@/modules/auth/services/authService";

import {
  getUser,
  saveUser,
  clearSession,

  saveToken,
  getToken,
} from "@/modules/auth/utils/authStorage";

const AuthContext =
  createContext();

export function AuthProvider({
  children,
}) {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // ======================
  // LOAD SESSION
  // ======================

  useEffect(() => {
    try {
      const token =
        getToken();

      const storedUser =
        getUser();

      if (token && storedUser) {
        setUser(storedUser);
      }
    } catch (error) {
      console.error(error);

      clearSession();
    } finally {
      setLoading(false);
    }
  }, []);

  // ======================
  // LOGIN
  // ======================

  const login = async (
  credentials
) => {
  try {
    setLoading(true);

    const response =
      await loginRequest(
        credentials
      );

        saveToken(response.token);

        saveUser(response.user);

        setUser(response.user);

        return response;

      } finally {
        setLoading(false);
      }
    };

  // ======================
  // LOGOUT
  // ======================

  const logout = () => {
    clearSession();

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,

        loading,

        login,

        logout,

        isAuthenticated:
          !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}