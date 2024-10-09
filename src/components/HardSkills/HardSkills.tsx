import Image from 'next/image';
import styles from './HardSkills.module.css';
import TSIcon from '@/assets/img/skills/ts.svg';
import CSSIcon from '@/assets/img/skills/css.svg';
import HTMLIcon from '@/assets/img/skills/html.svg';
import JSIcon from '@/assets/img/skills/js.svg';
import gitIcon from '@/assets/img/skills/git.svg';
import reactIcon from '@/assets/img/skills/react.svg';
import nextIcon from '@/assets/img/skills/next.svg';
import viteIcon from '@/assets/img/skills/vite.svg';
import webpackIcon from '@/assets/img/skills/webpack.svg';
import reduxIcon from '@/assets/img/skills/redux.svg';
import jestIcon from '@/assets/img/skills/jest.svg';
import vitestIcon from '@/assets/img/skills/vitest.svg';
import MUIIcon from '@/assets/img/skills/mui.svg';
import { Title } from '../Title/Title';

export function HardSkills() {
  return (
    <section className={styles.section}>
      <Title>Hard Skills</Title>
      <div className={styles.grid}>
        <div className={`${styles.cell} ${styles.ts}`}>
          <Image className={styles.icon} src={TSIcon} alt="ts" />
          <p className={styles.caption}>TypeScript</p>
        </div>

        <div className={`${styles.cell} ${styles.css}`}>
          <Image className={styles.icon} src={CSSIcon} alt="css" />
          <p className={styles.caption}>CSS</p>
        </div>

        <div className={`${styles.cell} ${styles.html}`}>
          <Image className={styles.icon} src={HTMLIcon} alt="html" />
          <p className={styles.caption}>HTML</p>
        </div>

        <div className={`${styles.cell} ${styles.js}`}>
          <Image className={styles.icon} src={JSIcon} alt="js" />
          <p className={styles.caption}>JavaScript</p>
        </div>

        <div className={`${styles.cell} ${styles.git}`}>
          <Image className={styles.icon} src={gitIcon} alt="git" />
          <p className={styles.caption}>Git</p>
        </div>

        <div className={`${styles.cell} ${styles.react}`}>
          <Image className={styles.icon} src={reactIcon} alt="react" />
          <p className={styles.caption}>React</p>
        </div>

        <div className={`${styles.cell} ${styles.next}`}>
          <Image className={styles.icon} src={nextIcon} alt="next" />
          <p className={styles.caption}>NextJS</p>
        </div>

        <div className={`${styles.cell} ${styles.vite}`}>
          <Image className={styles.icon} src={viteIcon} alt="vite" />
          <p className={styles.caption}>Vite</p>
        </div>

        <div className={`${styles.cell} ${styles.webpack}`}>
          <Image className={styles.icon} src={webpackIcon} alt="webpack" />
          <p className={styles.caption}>Webpack</p>
        </div>

        <div className={`${styles.cell} ${styles.redux}`}>
          <Image className={styles.icon} src={reduxIcon} alt="redux" />
          <p className={styles.caption}>Redux ToolKit</p>
        </div>

        <div className={`${styles.cell} ${styles.jest}`}>
          <Image className={styles.icon} src={jestIcon} alt="jest" />
          <p className={styles.caption}>Jest</p>
        </div>

        <div className={`${styles.cell} ${styles.vitest}`}>
          <Image className={styles.icon} src={vitestIcon} alt="vitest" />
          <p className={styles.caption}>Vitest</p>
        </div>

        <div className={`${styles.cell} ${styles.mui}`}>
          <Image className={styles.icon} src={MUIIcon} alt="mui" />
          <p className={styles.caption}>Material UI</p>
        </div>
      </div>
    </section>
  );
}
