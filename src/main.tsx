import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/index.tsx";
import { PrimeReactProvider } from "primereact/api";
import Kontakt from "./pages/Kontakt.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);
