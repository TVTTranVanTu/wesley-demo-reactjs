import React, { ReactNode } from 'react';

interface ContextChildren {
  children: ReactNode;
}
const ThemeContextDefault = {
  isLightTheme: true,
  light: {
    background: 'none',
    color: 'rgb(250, 250, 250)',
  },
  dark: {
    background: 'rgb(240, 240, 240)',
    color: '#000',
  },
};

export const ThemeContext = React.createContext(ThemeContextDefault);

const ThemeContextProvider: React.FC<ContextChildren> = ({ children }: ContextChildren) => {
  return <ThemeContext.Provider value={ThemeContextDefault}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
