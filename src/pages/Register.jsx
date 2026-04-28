import React from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";

export default function Register() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Register</h1>
        <div className={styles.field}>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div className={styles.field}>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" />
        </div>
        <button type="submit" className={styles.submit}>
          Register
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
