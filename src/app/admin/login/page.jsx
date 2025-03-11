"use client"; 
import React, { Suspense } from "react";
import AppData from "@data/app.json";
import "bootstrap/dist/css/bootstrap.min.css";


 function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] =  React.useState("");
    const [message, setMessage] =  React.useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
    
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
    
        const data = await res.json();
    
        if (res.ok) {
          setMessage("Đăng nhập thành công!");
        } else {
          setMessage(data.message);
        }
      };
    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h2 className="text-center">Login</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}
export default Login;