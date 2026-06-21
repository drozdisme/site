import styles from "./Research.module.css";
import about from "./About.module.css";
import Reveal from "./Reveal.jsx";
import { papers } from "../data/papers.js";

function LinkArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function Research() {
  return (
    <section id="research" className={about.section} aria-labelledby="research-h">
      <div className="wrap">
        <Reveal className={about.head}>
          <span className={about.num}>02</span>
          <h2 id="research-h" className={about.h2}>
            Current research
          </h2>
        </Reveal>

        <Reveal className={styles.intro}>
          A single programme on the boundaries of feature learning. Start with the précis below for
          a two-page map of the whole argument, then the five manuscripts, which reference one
          another by their internal codes - TR (theory), AB (abstractions), BM (benchmark).
        </Reveal>

        <div className={styles.list}>
          {papers.map((p) => (
            <Reveal
              as="article"
              key={p.code}
              className={p.featured ? `${styles.paper} ${styles.featured}` : styles.paper}
            >
              {p.featured && <span className={styles.badge}>Start here</span>}
              <span className={styles.code}>{p.code}</span>
              <div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.blurb}>{p.blurb}</p>
              </div>
              <div className={styles.links}>
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    className={styles.link}
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {l.label}
                    <LinkArrow />
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}