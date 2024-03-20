import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstTaskPage from "./pages/FirstTaskPage";
import ErrorPage from "./pages/ErrorPage";
import NewFormPage from "./pages/NewFormPage";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstTaskPage />} />
        <Route path="/second_task" element={<NewFormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterConfig;
