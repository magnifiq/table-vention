import { Grid, Paper } from "@mui/material";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import { Outlet } from "react-router-dom";

import CustomLink from "./CustomLink";

import useAuthStoreSelectors from "../../stores/useAuthStore";

const Layout = () => {
  const user = useAuthStoreSelectors.use.user();
  const resetState = useAuthStoreSelectors.use.resetState();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        resetState();
      })
      .catch((error) => console.error(error));
  };
  return (
    <Paper>
   
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <CustomLink to="/first_task">Go to the first task</CustomLink>
          </Grid>
          <Grid item>
            <CustomLink to="/second_task">Go to the second task</CustomLink>
          </Grid>
          <Grid item style={{ marginBottom: "10px" }}>
            {user ? (
              <CustomLink onClick={handleSignOut} to="/">
                Logout
              </CustomLink>
            ) : (
              <CustomLink to="/">Go to home</CustomLink>
            )}
          </Grid>
        </Grid>
     

      <Outlet />
    </Paper>
  );
};
export default Layout;
