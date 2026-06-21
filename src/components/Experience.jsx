import styles from "./Experience.module.css";
import about from "./About.module.css";
import Reveal from "./Reveal.jsx";

const roles = [
  {
    title: "Lead software developer",
    meta: "C++ ML library · acquired by Gazprom",
    body: "Led development of a machine-learning library written in C++, later sold to and integrated by Gazprom.",
  },
  {
    title: "CS specialist",
    meta: "Aviation industry · contract",
    body: "One-off computer-science engagement supporting an aviation company.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className={about.section} aria-labelledby="exp-h">
      <div className="wrap">
        <Reveal className={about.head}>
          <span className={about.num}>03</span>
          <h2 id="exp-h" className={about.h2}>
            Experience
          </h2>
        </Reveal>

        <div className={styles.list}>
          {roles.map((r) => (
            <Reveal key={r.title} className={styles.role}>
              <span className={styles.dot} />
              <div>
                <h3 className={styles.title}>{r.title}</h3>
                <p className={styles.meta}>{r.meta}</p>
                <p className={styles.body}>{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
