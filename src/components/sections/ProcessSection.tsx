import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/site";
import styles from "./Sections.module.css";

export function ProcessSection() {
  return (
    <section className={`${styles.section} ${styles.darkSection}`} id="processo" aria-labelledby="process-title">
      <div className={styles.sectionInner}>
        <SectionHeading
          eyebrow="Método de trabalho"
          title="Uma linha clara entre contexto e decisão"
          description="Um bom processo registra o que sabemos, o que será entregue e quais validações continuam sob responsabilidade dos profissionais habilitados."
        />

        <ol className={styles.processList}>
          {siteContent.process.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
