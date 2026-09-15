import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/site";
import styles from "./Sections.module.css";

export function ExamplesSection() {
  return (
    <section className={styles.section} id="exemplos" aria-labelledby="examples-title">
      <div className={styles.sectionInner}>
        <SectionHeading
          eyebrow="Cenários demonstrativos"
          title="Situações que pedem organização antes da execução"
          description="Os exemplos ajudam a tornar o serviço compreensível. Eles não representam clientes, contratos ou resultados reais."
        />

        <div className={styles.scenarioGrid}>
          {siteContent.scenarios.map((scenario, index) => (
            <article className={styles.scenarioCard} key={scenario.title}>
              <div className={styles.scenarioIllustration} aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.scenarioLines} />
              </div>
              <p className={styles.scenarioEyebrow}>{scenario.eyebrow}</p>
              <h3>{scenario.title}</h3>
              <p>{scenario.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
