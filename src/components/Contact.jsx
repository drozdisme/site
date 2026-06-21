import styles from "./Contact.module.css";
import about from "./About.module.css";
import Reveal from "./Reveal.jsx";

const cards = [
  { k: "Email", v: "research@drozdov.space", href: "mailto:research@drozdov.space" },
  { k: "Telegram", v: "@drozd_is_me", href: "https://t.me/drozd_is_me", external: true },
  { k: "Discord", v: "drozdisme" },
  { k: "GitHub", v: "github.com/drozdisme", href: "https://github.com/drozdisme", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className={about.section} aria-labelledby="contact-h">
      <div className="wrap">
        <Reveal className={about.head}>
          <span className={about.num}>04</span>
          <h2 id="contact-h" className={about.h2}>
            Contact
          </h2>
        </Reveal>

        <Reveal as="p" className={styles.lead}>
          The fastest way to reach me is email or Telegram. I'm happy to discuss the work, share
          manuscripts, or answer questions.
        </Reveal>

        <Reveal className={styles.grid}>
          {cards.map((c) => {
            const inner = (
              <>
                <span className={styles.k}>{c.k}</span>
                <span className={styles.v}>{c.v}</span>
              </>
            );
            return c.href ? (
              <a
                key={c.k}
                className={styles.card}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {inner}
              </a>
            ) : (
              <div key={c.k} className={styles.card}>
                {inner}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
