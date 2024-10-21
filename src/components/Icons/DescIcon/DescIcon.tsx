import styles from './DescIcon.module.css';

export function DescIcon() {
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
        <g id="Edit / Sort_Descending">
          <path
            id="Vector"
            d="M4 17H16M4 12H13M4 7H10M18 13V5M18 5L21 8M18 5L15 8"
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
