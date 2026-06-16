//src\app\providers\ThemeProvider.jsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [dark, setDark] = useState(false);

  useEffect(() => {

    const saved =
      localStorage.getItem("darkMode") === "true";

    setDark(saved);

  }, []);

  useEffect(() => {

    document.documentElement.classList.toggle(
      "dark",
      dark
    );

    localStorage.setItem(
      "darkMode",
      dark
    );

  }, [dark]);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}