import propTypes from "prop-types";

import IconButton from "@mui/material/IconButton";
import { Box, Paper } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";

import useThemeStoreSelectors from "../../../stores/useThemeStore";

const ToggleColorTheme = ({ toggleTheme }) => {
  const theme = useThemeStoreSelectors.use.theme();

  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === "dark" ? (
            <Brightness7OutlinedIcon color="primary" />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </Paper>
  );
};

ToggleColorTheme.propTypes = {
  toggleTheme: propTypes.func.isRequired,
};

export default ToggleColorTheme;
