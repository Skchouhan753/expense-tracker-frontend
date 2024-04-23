// Login.js

// https://expense-tracker-nvbn.onrender.com/user/register
// https://expense-tracker-nvbn.onrender.com/user/login
// https://expense-tracker-nvbn.onrender.com/user/logout

import { useState } from "react";
import axios from "axios";
import "./signup.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // if(!username || !email || !password ){
      //   setError('Invalid username or password');
      //   return;
      // }
      const response = await axios.post(
        "https://expense-tracker-nvbn.onrender.com/user/register",
        {
          userName,
          email,
          password,
        }
      );
      if (response.data.success) {
        navigate("/login");
      }
      // console.log("Login successful:", response.data.success);
      // Redirect or perform other actions upon successful login
    } catch (error) {
      console.error("Login failed:", error.response.data);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Signup</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
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
        <p>Already have account <Link to='/'> Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
