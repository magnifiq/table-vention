import { Navigate } from "react-router-dom";

import { TextField, Container, Grid, Paper, Link } from "@mui/material";

import CustomButton from "../../components/CustomButton/CustomButton";

import useHomeLogic from "./hooks/useHomeLogic";

const HomePage = () => {
  const {
    email,
    password,
    isSignUpActive,
    user,
    handleMethodChange,
    handleSignUp,
    handleSignIn,
    handleEmailChange,
    handlePasswordChange,
  } = useHomeLogic();

  if (user) {
    return <Navigate to="/first_task"></Navigate>;
  }

  return (
    <Paper>
      <Container maxWidth="sm">
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                value={password}
                type="password"
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
          {isSignUpActive && (
            <CustomButton type="button" text="Sign Up" onClick={handleSignUp} />
          )}
          {!isSignUpActive && (
            <CustomButton type="button" text="Sign In" onClick={handleSignIn} />
          )}
        </form>
      </Container>
      {isSignUpActive && <Link onClick={handleMethodChange}>Login</Link>}
      {!isSignUpActive && (
        <Link onClick={handleMethodChange}>Create an account</Link>
      )}
    </Paper>
  );
};

export default HomePage;
