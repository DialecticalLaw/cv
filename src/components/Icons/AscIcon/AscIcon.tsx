import styles from './AscIcon.module.css';

export function AscIcon() {
  return (
    <svg
      className={styles.icon}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <g id="Edit / Sort_Ascending">
          <path
            id="Vector"
            d="M4 17H10M4 12H13M18 11V19M18 19L21 16M18 19L15 16M4 7H16"
            stroke="var(--accent-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
