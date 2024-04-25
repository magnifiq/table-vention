import { useContext } from "react";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";

import { ThemeContext } from "./ThemeContext";

const ToggleColorTheme = () => {
  const { toggleTheme, muiTheme } = useContext(ThemeContext);


  return (
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
        {muiTheme.palette.mode === "dark" ? (
          <Brightness7OutlinedIcon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};

export default ToggleColorTheme;
