import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <span>
          <b>Ivan Drozdov</b> · Independent researcher · b. 2009
        </span>
        <span>Foundations of deep learning</span>
      </div>
    </footer>
  );
}
