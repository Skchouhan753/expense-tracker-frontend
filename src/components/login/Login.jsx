// Login.js

// https://expense-tracker-nvbn.onrender.com/user/register
// https://expense-tracker-nvbn.onrender.com/user/login
// https://expense-tracker-nvbn.onrender.com/user/logout

import { useState } from "react";
import axios from "axios";
import "./login.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setError("Invalid username or password");
        return;
      }
      const response = await axios.post(
        "https://expense-tracker-nvbn.onrender.com/user/login",
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        navigate("/dashboard");
      }
      console.log("Login successful:", response.data);
      // Redirect or perform other actions upon successful login
    } catch (error) {
      console.error("Login failed:", error.response.data);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="submit-button">
          Login
        </button>
        <p>Don&apo;t have account <Link to='/signup'> Signup</Link></p>
      </form>
    </div>
  );
};

export default Login;
