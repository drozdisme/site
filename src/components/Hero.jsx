import styles from "./Hero.module.css";
import PhaseCurve from "./PhaseCurve.jsx";

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 4 3 11l6 2 2 6 4-4 4 3z" />
    </svg>
  );
}
function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4 1.4-4-2.4-6-3m12 5v-3.6a3 3 0 0 0-.9-2.4c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12 12 0 0 0-6 0C5 2 3.9 2.3 3.9 2.3a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 2.4 9.3c0 5 3 6.3 6 6.6a3 3 0 0 0-.9 2.3V22" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.text}>
          <p className="eyebrow">Independent researcher</p>
          <h1 id="title" className={styles.name}>
            Ivan Drozdov
          </h1>
          <p className={styles.byline}>
            <b>b.&nbsp;2009</b>
          </p>
          <p className={styles.lede}>
            I work on my own, drawn to the hardest, most foundational questions about how learning works.
          </p>

          <div className={styles.chips}>
            <a className={styles.chip} href="mailto:research@drozdov.space">
              <IconMail />
              Email
            </a>
            <a className={styles.chip} href="https://t.me/drozd_is_me" target="_blank" rel="noopener noreferrer">
              <IconTelegram />
              Telegram
            </a>
            <a className={styles.chip} href="https://github.com/drozdisme" target="_blank" rel="noopener noreferrer">
              <IconGithub />
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.figure}>
          <PhaseCurve />
        </div>
      </div>
    </section>
  );
}
