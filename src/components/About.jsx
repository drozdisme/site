import styles from "./About.module.css";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-h">
      <div className="wrap">
        <Reveal className={styles.head}>
          <span className={styles.num}>01</span>
          <h2 id="about-h" className={styles.h2}>
            About
          </h2>
        </Reveal>

        <Reveal className={styles.prose}>
          <p>
            I am an independent researcher working on the mathematical foundations of deep
            learning. My current work develops a rigorous, non-asymptotic theory of <em>feature
            learning</em>: when neural networks actually acquire transferable structure, what
            fundamental barriers bound how fast they can learn from data, and when <em>emergence</em>{" "}
            reflects genuine compositional structure rather than an artifact of how we choose to
            measure it.
          </p>
          <p>
            I tend to treat a learning system the way one treats a physical system - looking for
            conserved quantities, order parameters, and the exact conditions under which sharp
            changes in behaviour can or cannot occur. Every analytic claim I make is paired with the
            numerical ratio that confirms it.
          </p>
          <p>
            Before turning to theory, I worked as a CS specialist in the aviation industry and was
            lead developer of a C++ machine-learning library that was later acquired by Gazprom.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
