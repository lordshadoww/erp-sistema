//src/app/providers/AuthProvider.jsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

console.log("AuthProvider activo");

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  try {

    const session =
      localStorage.getItem("erp_session");

    if (session) {
      setUser(JSON.parse(session));
    }

  } catch (error) {

    console.error(error);

    localStorage.removeItem(
      "erp_session"
    );

  } finally {

    setLoading(false);

  }

}, []);

  const login = (userData) => {

    localStorage.setItem(
      "erp_session",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const logout = () => {

    localStorage.removeItem("erp_session");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
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