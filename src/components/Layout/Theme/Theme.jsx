import PropTypes from "prop-types";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline, Paper } from "@mui/material";

import ToggleColorTheme from "./ToggleColorTheme";

import useThemeStoreSelectors from "../../../stores/useThemeStore";

export const Theme = ({ children }) => {
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
      <ToggleColorTheme toggleTheme={toggleTheme} />
      <MuiThemeProvider theme={muiTheme}>
        <Paper sx={{ height: "100vh" }} >
          {children}
        </Paper>
      </MuiThemeProvider>
    </>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
