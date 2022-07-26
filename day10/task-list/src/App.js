import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/collapse";

import { auth } from "./firebase/firebase";

import TaskPage from "./components/tasks/TaskPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import Navbar from "./components/common/Navbar";

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  })


  return (
    <BrowserRouter>
      <Navbar user={user}/>

      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
