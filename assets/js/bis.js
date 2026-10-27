/* ============================================================
   BIs DO EXPORT INVENTORY CONTROL
   ------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser editado no dia a dia.

   Para ADICIONAR um BI: copie um bloco { ... } dentro da lista
   "bis" da frente certa, cole logo abaixo e troque os textos.
   Não esqueça a vírgula entre um bloco e outro.

   Campos de cada BI:
     nome       nome que aparece no site
     descricao  uma frase curta
     link       link do relatório no Power BI
     preview    (opcional) imagem em assets/img/bis/
   ============================================================ */

window.EIC = {
  workspace:
    "https://app.powerbi.com/groups/14a89029-55dd-4c07-ad8b-764e8df0c870/list?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&experience=power-bi&subfolderId=42562",

  contato: "joaovitor.silvapereira@adm.com",

  frentes: [
    {
      id: "estoque-portos",
      nome: "Estoque Portos",
      cor: "#426DA9",
      foto: "assets/img/fotos/estoque-portos.webp",
      bis: [
        {
          nome: "Estoque Portos Dashboard",
          descricao: "Acompanhamento operacional da equipe.",
          link: "https://app.powerbi.com/groups/14a89029-55dd-4c07-ad8b-764e8df0c870/reports/7fb3cdcd-102c-4aa6-977a-b33489948f3c/192196514b51a4d4b915?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&experience=power-bi",
          preview: "assets/img/bis/estoque-portos-dashboard.webp"
        },
        {
          nome: "Controle Navios",
          descricao: "Controle e prazo dos navios, com acompanhamento de desempenho.",
          link: "https://app.powerbi.com/groups/14a89029-55dd-4c07-ad8b-764e8df0c870/reports/326862fe-e81e-42b3-ba2f-ede7c12b7fc7/a886ceaa51ea51d7f567?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&experience=power-bi",
          preview: "assets/img/bis/controle-navios.webp"
        },
        {
          nome: "Encerramento Safra Portos",
          descricao: "Status do encerramento de safra em cada porto.",
          link: "https://app.powerbi.com/groups/14a89029-55dd-4c07-ad8b-764e8df0c870/reports/ee837a1b-b3e9-4e1e-a0c7-2f70b892b8fc/88410b997404a0a232e6?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&experience=power-bi",
          preview: "assets/img/bis/encerramento-safra-portos.webp"
        },
        {
          nome: "Saldo sem associação",
          descricao: "Visão dos saldos sem associação nos portos.",
          link: "https://app.powerbi.com/groups/14a89029-55dd-4c07-ad8b-764e8df0c870/reports/92e1456e-81a2-4b7c-b9ed-bace9c29cfe1/ReportSectione31224e7ab606ce1c183?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&experience=power-bi",
          preview: "assets/img/bis/saldo-sem-associacao.webp"
        },
        {
          nome: "Validação Duplicidade",
          descricao: "Duplicidades geradas por erro sistêmico, para validação e correção imediata dos casos.",
          link: "https://app.powerbi.com/groups/14a89029-55dd-4c07-ad8b-764e8df0c870/reports/751b0863-5b74-43ce-9c10-849e257cea1d/426d6cef07dc476952da?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&experience=power-bi",
          preview: "assets/img/bis/validacao-duplicidade.webp"
        }
      ]
    },
    {
      id: "export-tax",
      nome: "Export Tax",
      cor: "#DC582A",
      foto: "assets/img/fotos/export-tax.webp",
      bis: [
        {
          nome: "Export Tax Flow",
          descricao: "Acompanhamento em tempo real do fluxo de exportação.",
          link: "https://app.powerbi.com/groups/14a89029-55dd-4c07-ad8b-764e8df0c870/reports/99ce514f-6b78-40d3-a436-350251e00b1d/0dcae896370c069bee3b?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&experience=power-bi",
          preview: "assets/img/bis/export-tax-flow.webp"
        },
        {
          nome: "Export Tax Dashboard",
          descricao: "Acompanhamento operacional da equipe.",
          link: "https://app.powerbi.com/groups/14a89029-55dd-4c07-ad8b-764e8df0c870/reports/43738836-ff46-4048-8b64-b04919e012f6/af6e0731b23828cf21d9?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&experience=power-bi",
          preview: "assets/img/bis/export-tax-dashboard.webp"
        }
      ]
    },
    {
      id: "redirecionamentos",
      nome: "Redirecionamentos",
      cor: "#00AD50",
      foto: "assets/img/fotos/redirecionamentos.webp",
      bis: [
        {
          nome: "Redirecionamentos",
          descricao: "Acompanhamento operacional da equipe.",
          link: "https://app.powerbi.com/groups/14a89029-55dd-4c07-ad8b-764e8df0c870/reports/da449c67-c5ed-4ca3-ae84-7ce7595894ae/7d934fee65604947f257?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&experience=power-bi",
          preview: "assets/img/bis/redirecionamentos.webp"
        }
      ]
    },
    {
      id: "geral",
      nome: "Geral Equipe",
      cor: "#012169",
      foto: "assets/img/fotos/geral.webp",
      bis: [
        {
          nome: "BI Global Insight Ops",
          descricao: "BI apresentado na reunião global.",
          link: "https://app.powerbi.com/groups/me/apps/822403e6-3eb2-4581-9326-a89da6f1a0b1/reports/41d08970-55d8-48c5-9f5d-86a92440ceb5/87a75b6327ca9b082456?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&experience=power-bi",
          preview: "assets/img/bis/bi-global-insight-ops.webp"
        }
      ]
    }
  ]
};
