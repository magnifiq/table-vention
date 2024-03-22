import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";

import FirstTaskPage from "./pages/FirstTaskPage/FirstTaskPage";
import ErrorPage from "./pages/ErrorPage";
import NewFormPage from "./pages/NewFormPage";

import Layout from "./components/Layout/Layout";
import productLoader from "../services/productLoader.js";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route index element={<FirstTaskPage />} loader={productLoader} />
      <Route path="/second_task" element={<NewFormPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
