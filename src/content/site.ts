export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  scope: string;
  icon: "clipboard" | "layers" | "gauge" | "compass";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ExampleScenario = {
  eyebrow: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteContent = {
  navigation: [
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Exemplos", href: "#exemplos" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
  services: [
    {
      id: "diagnostico",
      index: "01",
      title: "Diagnóstico e documentação",
      description:
        "Organização do cenário atual, dos riscos observados e das informações necessárias para decidir o próximo passo.",
      scope: "Entrega demonstrativa: levantamento, prioridades e registro técnico.",
      icon: "clipboard",
    },
    {
      id: "adequacao",
      index: "02",
      title: "Planos de adequação",
      description:
        "Estruturação de etapas, responsáveis e dependências para transformar uma necessidade técnica em um plano compreensível.",
      scope: "Entrega demonstrativa: plano por etapas com limites definidos.",
      icon: "layers",
    },
    {
      id: "relatorios",
      index: "03",
      title: "Inspeções e relatórios de apoio",
      description:
        "Consolidação de observações e evidências em um material claro para apoiar conversas com os responsáveis habilitados.",
      scope: "Entrega demonstrativa: registro organizado, sem validade de laudo.",
      icon: "gauge",
    },
    {
      id: "processos",
      index: "04",
      title: "Melhorias de processo",
      description:
        "Mapeamento de pontos de atrito e oportunidades de simplificação, com uma proposta objetiva de evolução.",
      scope: "Entrega demonstrativa: mapa do fluxo e recomendações priorizadas.",
      icon: "compass",
    },
  ] satisfies Service[],
  process: [
    {
      number: "01",
      title: "Conversa e levantamento",
      description:
        "Reunimos o contexto, as pessoas envolvidas e as evidências já disponíveis.",
    },
    {
      number: "02",
      title: "Escopo definido",
      description:
        "Registramos o que será analisado, o que fica de fora e como a entrega será validada.",
    },
    {
      number: "03",
      title: "Análise organizada",
      description:
        "Avaliamos o cenário e transformamos observações em itens claros e rastreáveis.",
    },
    {
      number: "04",
      title: "Apresentação e próximos passos",
      description:
        "Entregamos o material, esclarecemos limites e indicamos decisões que ainda exigem validação.",
    },
  ] satisfies ProcessStep[],
  scenarios: [
    {
      eyebrow: "Exemplo fictício 01",
      title: "Documentação de uma máquina",
      description:
        "Uma equipe precisa reunir manuais, registros e pendências antes de conversar com o profissional responsável pela análise formal.",
    },
    {
      eyebrow: "Exemplo fictício 02",
      title: "Melhoria de um fluxo industrial",
      description:
        "A operação quer visualizar gargalos e dependências para priorizar uma mudança sem perder o controle do escopo.",
    },
    {
      eyebrow: "Exemplo fictício 03",
      title: "Preparação para um laudo",
      description:
        "Um gestor organiza informações e perguntas técnicas antes de contratar a avaliação de um profissional habilitado.",
    },
  ] satisfies ExampleScenario[],
  faq: [
    {
      question: "Como começa um atendimento?",
      answer:
        "A primeira etapa é entender a necessidade e verificar quais informações já existem. Esta página é uma demonstração e não agenda atendimentos reais.",
    },
    {
      question: "Quais informações costumam ser necessárias?",
      answer:
        "Objetivo, contexto, registros disponíveis, pessoas envolvidas e o prazo desejado ajudam a definir uma primeira etapa clara.",
    },
    {
      question: "Como o escopo é definido?",
      answer:
        "O escopo registra entregas, limites, dependências e critério de aceite antes do início. Novas necessidades são avaliadas separadamente.",
    },
    {
      question: "O trabalho pode ser remoto?",
      answer:
        "Levantamentos e organização documental podem ser avaliados remotamente. Qualquer necessidade presencial dependeria do local e do profissional responsável.",
    },
    {
      question: "A conversa inicial já é um serviço contratado?",
      answer:
        "Não. Ela serve para compreender o cenário. Um serviço só começa depois de escopo, responsabilidades e condições estarem definidos.",
    },
    {
      question: "Os materiais substituem validação técnica formal?",
      answer:
        "Não. Registros de apoio e planos de trabalho não substituem laudos, responsabilidade técnica ou validação de profissional habilitado.",
    },
  ] satisfies FaqItem[],
};
