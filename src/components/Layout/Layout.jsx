import { useContext } from "react";

import { Grid, Paper } from "@mui/material";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import { Outlet } from "react-router-dom";

import { AuthContext } from "../../context/Auth/AuthContext";

import CustomLink from "./CustomLink";

const Layout = () => {
  const user = useContext(AuthContext).user;
  const handleSignOut = () => {
    signOut(auth)
      .catch((error) => console.error(error));
  };
  return (
    <Paper>
      <Paper>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <CustomLink to="/first_task">Go to the first task</CustomLink>
          </Grid>
          <Grid item>
            <CustomLink to="/second_task">Go to the second task</CustomLink>
          </Grid>
          <Grid item style={{marginBottom:"10px"}}>
            {user ? (
              <CustomLink onClick={handleSignOut} to="/">
                Logout
              </CustomLink>
            ) : (
              <CustomLink to="/">Go to home</CustomLink>
            )}
          </Grid>
        </Grid>
      </Paper>

      <Outlet />
    </Paper>
  );
};
export default Layout;