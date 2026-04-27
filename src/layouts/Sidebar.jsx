import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebarInner}>
      <Link to="/">Dashboard</Link>
      <Link to="/explore">Explore</Link>
    </div>
  );
}
