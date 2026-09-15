import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${align === "center" ? styles.center : ""}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
