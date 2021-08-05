import React from "react";

const ThemeContextDefault = {
  isLightTheme: true,
  light: {
    background: "none",
    color: "rgb(250, 250, 250)",
  },
  dark: {
    background: "rgb(240, 240, 240)",
    color: "#000",
  },
};

export const ThemeContext = React.createContext(ThemeContextDefault);

const ThemeContextProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={ThemeContextDefault}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
