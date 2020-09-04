import { Theme } from "@material-ui/core";
import React, { createContext, ReactNode, useState } from "react";
import darkTheme from "./darkTheme";
import defaultTheme from "./defaultTheme";

interface ThemeContextProps {
  theme: Theme;
  handleThemeChange: (themeName: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

interface Props {
  children: ReactNode;
}

const ThemeContextProvider: React.FC<Props> = (props: Props) => {
  const [theme, setTheme] = useState(defaultTheme);

  const handleThemeChange = (themeName: string): void => {
    console.log(theme.palette.type);
    localStorage.setItem("theme", themeName);
    switch (themeName) {
      case "default":
        console.log("default");
        setTheme(defaultTheme);
        break;
      case "dark":
        setTheme(darkTheme);
        break;
      default:
        setTheme(defaultTheme);
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ handleThemeChange: handleThemeChange, theme: theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
