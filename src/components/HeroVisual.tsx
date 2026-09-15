import styles from "./HeroVisual.module.css";

export function HeroVisual() {
  return (
    <div className={styles.frame} aria-hidden="true">
      <div className={styles.coordinates}>EC / DEMO / 01</div>
      <svg className={styles.drawing} viewBox="0 0 560 500" role="presentation">
        <defs>
          <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#small-grid)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect className={styles.grid} x="0" y="0" width="560" height="500" fill="url(#grid)" />
        <path className={styles.structure} d="M72 396h410M110 396V208l95-79 74 55 86-100 92 95v217" />
        <path className={styles.structureThin} d="M110 208h347M205 129v267M279 184v212M365 84v312" />
        <path className={styles.structureThin} d="m110 208 95 188 74-212 86 212 92-217" />
        <circle className={styles.node} cx="110" cy="208" r="7" />
        <circle className={styles.node} cx="205" cy="129" r="7" />
        <circle className={styles.nodeAccent} cx="279" cy="184" r="9" />
        <circle className={styles.node} cx="365" cy="84" r="7" />
        <circle className={styles.node} cx="457" cy="179" r="7" />
        <path className={styles.measure} d="M84 430h398M84 422v16M482 422v16" />
        <text className={styles.measureText} x="248" y="456">3980 mm</text>
        <path className={styles.detail} d="M405 236h98v98h-98zM422 253h64v64h-64z" />
        <path className={styles.detailAccent} d="M434 286h40" />
      </svg>
      <div className={styles.note}>
        <span>clareza</span>
        <strong>antes da execução</strong>
      </div>
    </div>
  );
}
