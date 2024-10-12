import styles from './page.module.css';
import { projects } from '@/helpers/projects';

export default function Projects() {
  return (
    <section>
      <h1>Проекты</h1>
      <div className={styles.wrapper}>
        {projects.map((project) => (
          <div className={styles.project} key={project.title}>
            <p className={styles.title}>{project.title}</p>
            <p className={styles.desc}>{project.desc}</p>
            <p className={styles.hint}>Подробнее &rarr;</p>
          </div>
        ))}
      </div>
    </section>
  );
}
