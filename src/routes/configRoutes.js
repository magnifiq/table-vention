import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './ErrorPage';
import NewFormPage from './NewFormPage';

const routes = [
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/second_task", element: <NewFormPage />, errorElement: <ErrorPage /> }
];

const router = createBrowserRouter(routes);

export default router;
