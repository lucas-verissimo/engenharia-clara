import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/site";
import styles from "./Sections.module.css";

export function ServicesSection() {
  return (
    <section className={styles.section} id="servicos" aria-labelledby="services-title">
      <div className={styles.sectionInner}>
        <div className={styles.splitHeading}>
          <SectionHeading
            eyebrow="Escopo em primeiro lugar"
            title="Serviços técnicos explicados sem ruído"
            description="Cada frente começa com limites claros e termina com uma entrega que pode ser revisada. Os itens abaixo são exemplos fictícios para demonstrar a organização da página."
          />
          <p className={styles.sideNote}>
            <span>Nota 01</span>
            Este projeto apresenta uma empresa fictícia. Nenhum serviço é oferecido ou executado por meio desta demonstração.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {siteContent.services.map((service) => (
            <article className={styles.serviceCard} key={service.id}>
              <div className={styles.cardTopline}>
                <span className={styles.serviceIcon}>
                  <Icon name={service.icon} />
                </span>
                <span className={styles.cardIndex}>{service.index}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.scope}>{service.scope}</div>
              <a href="#contato">
                Simular pedido <Icon name="arrow" size={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
