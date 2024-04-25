import { Navigate } from "react-router-dom";

import NewForm from "../components/ReactHookFormComponents/NewForm/NewForm.jsx";

import useAuthStoreSelectors from "../stores/useAuthStore.js";

const NewFormPage = () => {
  const user = useAuthStoreSelectors.use.user();

  if (!user) return <Navigate to="/" />;
  return <NewForm />;
};

export default NewFormPage;
