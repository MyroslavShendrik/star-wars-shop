import { createContext, useContext, useLayoutEffect } from "react";
import { themeToCssVars } from "@/utils";

const ThemeContext = createContext(null);

export function ThemeProvider({ theme, children }) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const vars = themeToCssVars(theme);
    Object.entries(vars).forEach(([name, value]) => root.style.setProperty(name, value));
    return () => Object.keys(vars).forEach((name) => root.style.removeProperty(name));
  }, [theme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme має використовуватись всередині <ThemeProvider>");
  return theme;
}