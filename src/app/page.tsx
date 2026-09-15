import { Header } from "@/components/Header";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icon";
import { QuoteRequest } from "@/components/QuoteRequest";
import { DeliverablesSection } from "@/components/sections/DeliverablesSection";
import { ExamplesSection } from "@/components/sections/ExamplesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { publicConfig } from "@/content/config";
import { getCurrentYear } from "@/lib/year";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />

      <main id="conteudo">
        <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.demoTag}>
                <span aria-hidden="true" />
                Empresa fictícia · Projeto demonstrativo
              </div>
              <h1 id="hero-title">
                Engenharia começa com <em>clareza.</em>
              </h1>
              <p className={styles.heroLead}>
                Organizamos contexto, escopo e próximos passos para que decisões técnicas comecem por informações compreensíveis.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#contato">
                  Simular uma conversa <Icon name="arrow" size={19} />
                </a>
                <a className={styles.secondaryAction} href="#servicos">Conhecer os exemplos</a>
              </div>
              <dl className={styles.heroFacts}>
                <div>
                  <dt>Escopo</dt>
                  <dd>registrado antes do início</dd>
                </div>
                <div>
                  <dt>Entrega</dt>
                  <dd>organizada e revisável</dd>
                </div>
              </dl>
            </div>
            <HeroVisual />
          </div>
        </section>

        <ServicesSection />
        <ProcessSection />
        <ExamplesSection />
        <DeliverablesSection />
        <FaqSection />

        <section className={styles.contact} id="contato" aria-labelledby="contact-title">
          <div className={styles.contactInner}>
            <div className={styles.contactIntro}>
              <p className={styles.contactEyebrow}>Simulação local</p>
              <h2 id="contact-title">Organize um pedido inicial sem enviar nenhum dado</h2>
              <p>
                Preencha somente informações fictícias. O resumo é criado no navegador e pode ser copiado para demonstrar uma experiência de contato segura e transparente.
              </p>
              <div className={styles.contactBoundary}>
                <span aria-hidden="true">i</span>
                <p>
                  Este formulário não representa um canal de atendimento. A Engenharia Clara não é uma empresa real.
                </p>
              </div>
            </div>
            <QuoteRequest />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <a className={styles.footerBrand} href="#inicio">Engenharia <strong>Clara</strong></a>
            <p>Projeto demonstrativo autoral. Empresa, serviços e cenários são fictícios.</p>
          </div>
          <div className={styles.footerLinks}>
            {publicConfig.portfolioUrl ? (
              <a href={publicConfig.portfolioUrl} rel="noreferrer">Portfólio do autor</a>
            ) : null}
            {publicConfig.sourceUrl ? (
              <a href={publicConfig.sourceUrl} rel="noreferrer">Código-fonte</a>
            ) : null}
            <a href="#inicio">Voltar ao início</a>
          </div>
          <p className={styles.copyright}>© {getCurrentYear()} · Demonstração sem fins operacionais</p>
        </div>
      </footer>
    </>
  );
}
