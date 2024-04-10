import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from "./context/Theme/ThemeContext.jsx";
import { AuthProvider } from "./context/Auth/AuthContext.jsx";

import FirstTaskPage from "./pages/FirstTaskPage/FirstTaskPage";
import ErrorPage from "./pages/ErrorPage";
import NewFormPage from "./pages/NewFormPage";
import HomePage from "./pages/HomePage";

import Layout from "./components/Layout/Layout";
import productLoader from "../services/productLoader.js";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/first_task"
        element={<FirstTaskPage />}
        loader={productLoader}
      />
      <Route path="/second_task" element={<NewFormPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
