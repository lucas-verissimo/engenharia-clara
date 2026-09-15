import { Icon } from "@/components/Icon";
import styles from "./Sections.module.css";

const deliverables = [
  {
    label: "Material organizado",
    title: "O que a entrega demonstra",
    items: [
      "Escopo e limitações registrados",
      "Informações organizadas por prioridade",
      "Próximos passos explicados com clareza",
    ],
  },
  {
    label: "Validação responsável",
    title: "O que continua explícito",
    items: [
      "Decisões que exigem profissional habilitado",
      "Dependências e informações ainda pendentes",
      "Mudanças de escopo tratadas separadamente",
    ],
  },
];

export function DeliverablesSection() {
  return (
    <section className={styles.deliverables} aria-labelledby="deliverables-title">
      <div className={styles.sectionInner}>
        <div className={styles.deliverableIntro}>
          <p>Em vez de depoimentos inventados</p>
          <h2 id="deliverables-title">Mostramos exatamente o que seria entregue.</h2>
        </div>

        <div className={styles.deliverableGrid}>
          {deliverables.map((deliverable) => (
            <article key={deliverable.label}>
              <span>{deliverable.label}</span>
              <h3>{deliverable.title}</h3>
              <ul>
                {deliverable.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={19} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
