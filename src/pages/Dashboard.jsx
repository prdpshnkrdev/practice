import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.contentGrid}>
      <div className={styles.card}>Card 1</div>
      <div className={styles.card}>Card 2</div>
      <div className={styles.card}>Card 3</div>
    </div>
  );
}
