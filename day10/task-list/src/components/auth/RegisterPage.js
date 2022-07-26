import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import {auth} from "../../firebase/firebase"

export default function RegisterPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onRegister(event) {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1 className="m-0">Register</h1>
        </div>
        <div className="card-body">
          <form onSubmit={onRegister}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div>
              <div class="d-grid mt-4">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
