import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

interface loginFormProps {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<loginFormProps>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(e.target.name, e.target.value);
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 1. Perform validation/login logic here
    console.log("Logging in with:", { formData });

    // 2. Mock success: Save token and navigate to dashboard
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input
            type="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, ["username"]: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, ["password"]: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
export default LoginForm;
