import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import RecipePage from "./components/recipes/RecipePage";

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RecipePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
    </BrowserRouter>
  )

}
