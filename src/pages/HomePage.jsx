import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import { TextField, Container, Grid, Paper, Link } from "@mui/material";

import { AuthContext } from "../context/Auth/AuthContext";
import CustomButton from "../components/CustomButton/CustomButton";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const {user}=useContext(AuthContext);
  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
    console.log(user)
  };

  const handleSignUp = () => {
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignIn = () => {
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  if (user) {
    return <Navigate to="/first_task"></Navigate>;
  }
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

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
