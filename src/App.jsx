import { useEffect } from "react";

import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Theme } from "./components/Layout/Theme/Theme.jsx";

import FirstTaskPage from "./pages/FirstTaskPage/FirstTaskPage";
import ErrorPage from "./pages/ErrorPage";
import NewFormPage from "./pages/NewFormPage";
import HomePage from "./pages/HomePage/HomePage.jsx";

import Layout from "./components/Layout/Layout";
import productLoader from "./services/productLoader.js";

import useAuthStoreSelectors from "./stores/useAuthStore";

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
  const isFetching = useAuthStoreSelectors.use.isFetching();
  const initializeAuth = useAuthStoreSelectors.use.initialize();

  useEffect(() => {
    initializeAuth();
  }, []);

  if (isFetching) return <h2>Loading...</h2>;

  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  );
};

export default App;
