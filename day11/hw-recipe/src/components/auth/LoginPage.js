import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebase";

import Button from "../common/Button";
import Alert from "../common/Alert";
import service from "../../services/util.service";

export default function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onRegister(event) {
    event.preventDefault();

    setLoading(true);
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCred);
      navigate("/");
    } catch (err) {
      setError(service.getFirebaseError(err));
    }
    setLoading(false);
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1 className="m-0">Login</h1>
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
                <Button type="submit" loading={loading}>
                  Login
                </Button>
              </div>
            </div>
          </form>
          {error ? <Alert className="mt-4 mb-0">{error}</Alert> : <></>}
        </div>
      </div>
    </div>
  );
}
