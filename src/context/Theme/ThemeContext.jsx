import { useState, createContext } from "react";

import PropTypes from "prop-types";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import ToggleColorTheme from "./ToggleColorTheme";

export const ThemeContext = createContext({
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <div>
      <ThemeContext.Provider value={{ toggleTheme, muiTheme }}>
        <CssBaseline />
        <ToggleColorTheme />
        <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
