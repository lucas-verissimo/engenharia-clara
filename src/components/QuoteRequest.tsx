"use client";

import { FormEvent, useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import {
  buildQuoteSummary,
  contactOptions,
  type QuoteFieldErrors,
  type QuoteRequest as QuoteRequestValues,
  serviceOptions,
  validateQuoteRequest,
} from "@/lib/quote";
import styles from "./QuoteRequest.module.css";

const initialValues: QuoteRequestValues = {
  name: "",
  service: "",
  description: "",
  contactPreference: "",
};

export function QuoteRequest() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<QuoteFieldErrors>({});
  const [summary, setSummary] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const remainingCharacters = 400 - values.description.length;

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function updateField<Key extends keyof QuoteRequestValues>(
    field: Key,
    value: QuoteRequestValues[Key],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSummary("");
    setAnnouncement("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateQuoteRequest(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSummary("");
      setAnnouncement("Revise os campos indicados. Nenhum dado foi enviado.");
      return;
    }

    setSummary(buildQuoteSummary(values));
    setAnnouncement("Demonstração concluída. Nenhum dado foi enviado ou armazenado.");
  }

  async function copySummary() {
    if (!summary) return;

    try {
      await navigator.clipboard.writeText(summary);
      setAnnouncement("Resumo copiado. Nenhum dado foi enviado ou armazenado.");
    } catch {
      setAnnouncement("Não foi possível copiar automaticamente. Selecione o texto do resumo abaixo.");
    }
  }

  return (
    <form action="#contato" className={styles.form} noValidate onSubmit={handleSubmit}>
      <div className={styles.demoNotice}>
        <span aria-hidden="true">DEMO</span>
        <p>
          Este formulário funciona apenas no seu navegador. Ele não envia, salva ou compartilha as informações preenchidas.
        </p>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="name">Como podemos chamar você? <span>(opcional)</span></label>
          <input
            aria-describedby={errors.name ? "name-error" : "name-help"}
            aria-invalid={Boolean(errors.name)}
            id="name"
            maxLength={81}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Ex.: Marina"
            type="text"
            value={values.name}
          />
          {errors.name ? (
            <p className={styles.error} id="name-error">{errors.name}</p>
          ) : (
            <p className={styles.help} id="name-help">Use apenas um nome fictício nesta demonstração.</p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="service">Qual é o interesse? <span>(opcional)</span></label>
          <select
            aria-describedby={errors.service ? "service-error" : undefined}
            aria-invalid={Boolean(errors.service)}
            id="service"
            onChange={(event) => updateField("service", event.target.value)}
            value={values.service}
          >
            <option value="">Escolha depois</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.service ? <p className={styles.error} id="service-error">{errors.service}</p> : null}
        </div>

        <div className={`${styles.field} ${styles.fullField}`}>
          <div className={styles.labelRow}>
            <label htmlFor="description">Contexto inicial <span>(opcional)</span></label>
            <span aria-live="polite" className={remainingCharacters < 40 ? styles.limitWarning : ""}>
              {remainingCharacters} restantes
            </span>
          </div>
          <textarea
            aria-describedby={errors.description ? "description-error" : "description-help"}
            aria-invalid={Boolean(errors.description)}
            id="description"
            maxLength={401}
            onChange={(event) => updateField("description", event.target.value)}
            placeholder="Ex.: precisamos organizar documentos e definir as prioridades de uma melhoria."
            rows={5}
            value={values.description}
          />
          {errors.description ? (
            <p className={styles.error} id="description-error">{errors.description}</p>
          ) : (
            <p className={styles.help} id="description-help">Não inclua dados pessoais ou informações de uma empresa real.</p>
          )}
        </div>

        <div className={`${styles.field} ${styles.fullField}`}>
          <label htmlFor="contact-preference">Preferência de conversa <span>(opcional)</span></label>
          <select
            aria-describedby={errors.contactPreference ? "contact-error" : undefined}
            aria-invalid={Boolean(errors.contactPreference)}
            id="contact-preference"
            onChange={(event) => updateField("contactPreference", event.target.value)}
            value={values.contactPreference}
          >
            <option value="">A definir em uma conversa</option>
            {contactOptions.slice(1).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.contactPreference ? (
            <p className={styles.error} id="contact-error">{errors.contactPreference}</p>
          ) : null}
        </div>
      </div>

      <button className={styles.submitButton} type="submit">
        Gerar resumo local <Icon name="arrow" size={19} />
      </button>

      <noscript>
        <p className={styles.noScript}>Ative JavaScript para gerar o resumo local. Nenhuma informação é enviada.</p>
      </noscript>

      <p aria-live="polite" className={styles.announcement} data-has-errors={hasErrors || undefined}>
        {announcement}
      </p>

      {summary ? (
        <div className={styles.summary}>
          <div className={styles.summaryHeader}>
            <div>
              <span>Resultado local</span>
              <h3>Resumo para uma conversa inicial</h3>
            </div>
            <button onClick={copySummary} type="button">
              <Icon name="copy" size={18} /> Copiar
            </button>
          </div>
          <textarea aria-label="Resumo demonstrativo gerado" readOnly rows={7} value={summary} />
        </div>
      ) : null}
    </form>
  );
}
