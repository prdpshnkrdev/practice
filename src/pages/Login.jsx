import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
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
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
