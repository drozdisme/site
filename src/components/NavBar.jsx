import styles from "./NavBar.module.css";

const links = [
  ["about", "about"],
  ["research", "research"],
  ["experience", "experience"],
  ["contact", "contact"],
];

export default function NavBar() {
  return (
    <header className={styles.bar}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#top" className={styles.mark}>
          Ivan&nbsp;<span>Drozdov</span>
        </a>
        <nav className={styles.nav} aria-label="Sections">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
