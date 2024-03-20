import { Grid } from "@mui/material";

import { Outlet } from "react-router-dom";

import CustomLink from "./CustomLink";

const Layout = () => (
  <>
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <CustomLink to="/">Go to the first task</CustomLink>
      </Grid>
      <Grid item>
        <CustomLink to="/second_task">Go to the second task</CustomLink>
      </Grid>
    </Grid>
    <Outlet />
  </>
);

export default Layout;
