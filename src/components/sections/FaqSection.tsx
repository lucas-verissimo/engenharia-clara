import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/site";
import styles from "./Sections.module.css";

export function FaqSection() {
  return (
    <section className={styles.section} id="duvidas" aria-labelledby="faq-title">
      <div className={`${styles.sectionInner} ${styles.faqLayout}`}>
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Antes de começar, alinhe o que importa"
          description="Respostas de exemplo para mostrar como uma página institucional pode antecipar dúvidas sem criar promessas indevidas."
        />

        <div className={styles.faqList}>
          {siteContent.faq.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span aria-hidden="true" className={styles.faqMarker}>+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
