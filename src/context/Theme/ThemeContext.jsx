import PropTypes from "prop-types";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import ToggleColorTheme from "./ToggleColorTheme";

import useThemeStoreSelectors from "../../stores/useThemeStore";

export const ThemeProvider = ({ children }) => {
  const theme = useThemeStoreSelectors.use.theme();
  const toggleTheme = useThemeStoreSelectors.use.toggleTheme();

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <>
      <CssBaseline />
      <ToggleColorTheme toggleTheme={toggleTheme}/>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
