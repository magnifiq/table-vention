import { useContext } from "react";
import { Navigate } from "react-router-dom";

import NewForm from "../components/ReactHookFormComponents/NewForm/NewForm.jsx";
import { AuthContext } from "../context/Auth/AuthContext.jsx";
const NewFormPage = () => {
  const user = useContext(AuthContext).user;

  if (!user) return <Navigate to="/" />;
  return <NewForm />;
};

export default NewFormPage;
