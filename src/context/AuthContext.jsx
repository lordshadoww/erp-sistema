//src\modules\auth\context\AuthContext.jsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext =
  createContext();

export function AuthProvider({
  children,
}) {

  const [user, setUser] =
    useState(null);

  // Load session
  useEffect(() => {

    const session =
      localStorage.getItem("erp_session");

    if (session) {
      setUser(JSON.parse(session));
    }

  }, []);

  // Login
  const login = (userData) => {

    localStorage.setItem(
      "erp_session",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  // Logout
  const logout = () => {

    localStorage.removeItem(
      "erp_session"
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}