import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import styles from "./Login.module.scss";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    await login(form);
    navigate("/");
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>

        {/* Email */}
        <div className={styles.field}>
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div className={styles.field}>
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="........"
          />
        </div>

        {/* Remember Me */}
        <div className={styles.row}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            Remember me
          </label>
          <a
            href="#"
            onClick={() => alert("Forgot password?")}
            className={styles.link}
          >
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button type="submit" className={styles.submit}>
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className={styles.link}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
