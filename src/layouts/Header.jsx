import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerInner}>
      <div className={styles.logo}>MyAPP</div>
      <nav className={styles.nav}>
        <Link to="/">Dashboard</Link>
        <Link to="/explore">Explore</Link>
      </nav>
    </div>
  );
}
