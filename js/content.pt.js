// js/content.pt.js
export const content = {
  nav: {
    logo: 'DATA NOT FOUND',
    links: [
      { label: 'Visão Geral',      href: '#problem' },
      { label: 'O Índice',         href: '#about-index' },
      { label: 'Resultados',       href: '#findings' },
      { label: 'Recomendações',    href: '#recommendations' },
      { label: 'Download',         href: '#download' },
    ],
  },

  hero: {
    title: ['DATA', 'NOT', 'FOUND'],
    subtitle: 'Transparência de Dados em Mídias Sociais para a Integridade da Informação',
    institution: 'NetLab UFRJ & Minderoo Centre for Technology and Democracy · 2026',
    cta: 'Role para explorar',
  },

  problem: {
    eyebrow: 'Visão Geral',
    title: 'Data Not Found: Transparência de Dados em Mídias Sociais para a Integridade da Informação',
    body: [
      'As plataformas de mídia social estão evadindo o escrutínio público. Para avaliar as causas raízes desse problema, pesquisadores do NetLab UFRJ (Universidade Federal do Rio de Janeiro, Brasil) e do Minderoo Centre for Technology and Democracy (Universidade de Cambridge, Reino Unido) desenvolveram o Índice de Transparência de Dados em Mídias Sociais. O índice mede as condições de acesso a dados em 15 grandes plataformas na UE, no Reino Unido e no Brasil.',
      'Nossa avaliação abrange dados públicos de conteúdo gerado por usuários e dados de publicidade. Os resultados mostram que, na maioria dos casos, o acesso significativo está sendo negado. Independentemente dos marcos regulatórios nas 3 regiões, a opacidade é a norma e a transparência é a exceção. A falta de transparência nos dados de conteúdo gerado por usuários e de publicidade impede o monitoramento efetivo e independente de riscos individuais e sociais. Sem acesso a dados públicos, é impossível rastrear os fluxos de desinformação que ameaçam nossas democracias. Sem acesso a dados de publicidade, os atores do mercado não conseguem tomar decisões informadas e auditáveis. O regime de opacidade das plataformas de mídia social está, portanto, possibilitando o retrocesso democrático e a fraude financeira.',
      'Nosso relatório recomenda ações coordenadas de múltiplos stakeholders para impor o escrutínio público sobre as plataformas de mídia social. Essas ações incluem o estabelecimento de protocolos interoperáveis de acesso a dados e mecanismos para reduzir as disparidades regionais e de plataforma que minam a integridade global da informação.',
    ],
  },

  aboutIndex: {
    eyebrow: 'Sobre o Índice',
    title: 'O Índice de Transparência de Dados em Mídias Sociais',
    body: [
      'Este Índice resume a primeira avaliação sistemática das condições de acesso a dados em 15 grandes plataformas de mídia social em três contextos regulatórios: a União Europeia, o Reino Unido e o Brasil. Com base no princípio, reconhecido pelas Nações Unidas, de que a transparência só é significativa quando apoiada por dados de alta qualidade, o Índice avalia as plataformas usando um framework orientado pela qualidade dos dados.',
      'O conteúdo gerado por usuários e os dados de publicidade são avaliados separadamente, por meio de uma metodologia de código aberto fundamentada em testes empíricos. As plataformas são pontuadas em uma escala de 100 pontos, com critérios especiais correspondendo a 75% e indicadores adicionais de qualidade de dados a 25% da pontuação.',
      'Além de medir se o acesso existe, o Índice examina como e sob quais condições os dados são disponibilizados. Dados de alta qualidade são essenciais para pesquisa independente, formulação eficaz de políticas e responsabilização significativa.',
    ],
    legendLabel: 'Categorias de pontuação',
  },

  ugc: {
    eyebrow: '',
    title: 'Índice de Transparência de Dados UGC',
    lead: 'Acesso a dados públicos de conteúdo gerado por usuários em 15 plataformas e 3 regiões.',
  },

  ads: {
    eyebrow: '',
    title: 'Índice de Transparência em Publicidade',
    lead: 'Acesso a dados de publicidade em 14 plataformas e 3 regiões. O Bluesky é excluído por não ter publicidade.',
  },

  findings: {
    eyebrow: 'Principais Resultados',
    title: 'O que os dados revelam',
    items: [
      {
        statement: 'A transparência de dados em mídias sociais permanece precária na UE, no Brasil e no Reino Unido.',
        body: 'Nossos resultados mostram que serviços amplamente utilizados não fornecem mecanismos de transparência de dados — nem para conteúdo gerado por usuários (UGC) nem para publicidade, incluindo tanto interfaces de programação de aplicações (APIs) quanto interfaces gráficas de usuário (GUIs) — em nenhuma das regiões avaliadas. O Reddit, por exemplo, oferece acesso programático a dados públicos de UGC, mas não a dados de publicidade em nenhuma região avaliada. O X (antigo Twitter) oferece acesso a dados públicos de UGC, mas sujeito a estruturas de preços proibitivas, enquanto seu repositório de publicidade, disponível apenas na UE, não retorna resultados. A Meta oferece acesso <span style="color:#496AB1">Significativo</span> a dados de publicidade no Reino Unido, mas sua pontuação de transparência de UGC foi considerada <span style="color:#EA4E54">Negligível</span> em todas as regiões analisadas. Plataformas como TikTok e LinkedIn oferecem, na melhor das hipóteses, transparência <span style="color:#F3CB00">Deficiente</span> ou <span style="color:#41B5DF">Limitada</span> tanto para dados de UGC quanto de publicidade.',
      },
      {
        statement: 'As disparidades no acesso a dados ao redor do mundo refletem um modelo de transparência seletiva orientado pela conformidade regulatória.',
        body: 'As condições de transparência variam entre jurisdições, particularmente para dados de publicidade, com acesso mais robusto observado no Reino Unido e na UE, regiões com marcos regulatórios mais sólidos — ou, no caso do Reino Unido, potencialmente refletindo transbordamentos regulatórios. O Brasil, que não possui um marco dedicado à transparência de plataformas, registra consistentemente os menores níveis de acesso a dados. Em média, o Reino Unido apresenta pontuações comparativamente mais próximas às da UE.',
      },
      {
        statement: 'Mecanismos robustos para acesso a dados públicos de conteúdo gerado por usuários são escassos.',
        body: "O Bluesky e o YouTube foram as únicas plataformas cujas APIs públicas foram consideradas <span style='color:#496AB1'>Significativas</span> em nossa análise, de forma consistente em todas as regiões avaliadas. Elas não diferenciam o conteúdo público que pode ser recuperado, e suas funcionalidades tiveram bom desempenho em nossos testes. O X, o Telegram e o Reddit apresentam limitações em suas APIs — mais notavelmente, no caso do X, os custos associados ao acesso. Os dados públicos de UGC do Facebook e Instagram só podem ser acessados por meio da Meta Content Library, cuja API é restrita a ambientes seguros e controlados e não permite a extração de dados desagregados para a infraestrutura dos próprios usuários. Embora plataformas como LinkedIn e TikTok ofereçam APIs para pesquisadores no âmbito do DSA, o Pinterest e o Snapchat apenas aceitam solicitações de dados de pesquisadores, o que é considerado insuficiente sob nossa abordagem metodológica.",
      },
      {
        statement: 'As ferramentas existentes para acesso e exportação de dados de publicidade permanecem demasiado limitadas para um escrutínio significativo.',
        body: 'A dependência de APIs e GUIs com capacidades de pesquisa limitadas, combinada com o acesso restrito a dados granulares, impede que os pesquisadores avaliem eficazmente as práticas de segmentação, o alcance da publicidade e os impactos sociais mais amplos da publicidade online. Plataformas como Meta, LinkedIn e TikTok permitem que anúncios sejam consultados usando palavras-chave, mas outras, incluindo X, Google (YouTube) e Pinterest, não permitem, limitando a descoberta e recuperação de dados a buscas baseadas em nomes de anunciantes. Além disso, as plataformas divulgam dados de alcance e segmentação em amplas faixas de valores, restringindo ainda mais tanto o escrutínio independente quanto a capacidade dos anunciantes de medir com precisão o desempenho das campanhas e o retorno sobre o investimento.',
      },
    ],
  },

  recommendations: {
    eyebrow: 'Recomendações',
    title: 'Um chamado à ação multissetorial',
    groups: [
      {
        stakeholder: 'Empresas de Mídias Sociais',
        items: [
          {
            id: 'R1',
            title: 'Garantir acesso universal e significativo a todos os dados de publicidade',
            full: 'As plataformas devem fornecer acesso gratuito, programático e aberto a repositórios de publicidade contendo o conjunto completo de dados de anúncios, disponibilizados por meio de APIs e GUIs, que atendam a padrões robustos de qualidade de dados e não diferenciem o acesso com base no conteúdo dos anúncios. Isso é essencial para capacitar pesquisadores e reguladores a identificar riscos, avaliar a conformidade e impor responsabilização nos ecossistemas de informação online.',
          },
          {
            id: 'R2',
            title: 'Garantir acesso universal e significativo a dados públicos gerados por usuários para usos de interesse público',
            full: 'As plataformas devem fornecer acesso gratuito, programático e não discricionário a dados públicos de UGC fora de ambientes controlados ou seguros, garantindo que atendam a padrões claros de completude e qualidade e sejam disponibilizados por meio de APIs e GUIs para acomodar diferentes níveis de capacidade técnica e expertise. Isso é fundamental para garantir que as plataformas de mídia social cumpram seus requisitos legais e que cidadãos e tomadores de decisão possam acessar informações críticas de que necessitam.',
          },
          {
            id: 'R3',
            title: 'Encerrar práticas seletivas e fragmentadas de transparência de dados',
            full: 'As plataformas devem alinhar suas práticas globais de transparência de dados de UGC e publicidade com os padrões mais abertos, em vez de depender de conformidade mínima ou específica por jurisdição, minimizando assim a transparência seletiva impulsionada por supervisão regulatória desigual.',
          },
          {
            id: 'R4',
            title: 'Fornecer a pesquisadores credenciados acesso a dados não públicos dentro dos limites definidos pela regulação e supervisão democrática.',
            full: 'O acesso a dados não públicos das plataformas é essencial para monitorar riscos e danos habilitados pelas plataformas, bem como para auditar de forma independente as métricas de transparência autorrelatadas pelas plataformas. Sob o Artigo 40 do DSA, tal acesso é formalmente regulamentado. Embora este relatório não examine o acesso a dados não públicos, enfatizamos a necessidade de processos robustos de credenciamento de pesquisadores e protocolos seguros para viabilizar sua disponibilidade responsável.',
          },
          {
            id: 'R5',
            title: 'Fornecer acesso a dados sobre conteúdo moderado e removido',
            full: 'Esses dados, tanto para UGC quanto para publicidade, são cruciais para compreender as ameaças à integridade da informação e avaliar como as plataformas as endereçam e moderam. As empresas devem manter tais informações em bancos de dados auditáveis, em vez de apagá-las ou perdê-las.',
          },
        ],
      },
      {
        stakeholder: 'Organismos Internacionais de Governança',
        items: [
          {
            id: 'R6',
            title: 'Avançar a agenda de integridade da informação por meio de padrões de acesso e transparência de dados.',
            full: 'Os mecanismos de transparência de dados devem evoluir de compromissos autorregulados para marcos regulatórios juridicamente vinculantes que permitam supervisão efetiva. Estes devem ser apoiados pelo estabelecimento e promoção de princípios e padrões internacionais que regem as dimensões técnicas, éticas e operacionais do acesso a dados.',
          },
        ],
      },
      {
        stakeholder: 'Regulação Regional',
        items: [
          {
            id: 'R7',
            title: 'União Europeia: Aplicar integralmente os Artigos 39 e 40 do Regulamento de Serviços Digitais.',
            full: 'A Comissão Europeia deve garantir a implementação efetiva de mecanismos de acesso a dados de publicidade e UGC público por meio de protocolos padronizados e estar preparada para impor penalidades significativas — incluindo multas substanciais e, quando necessário, suspensão temporária de serviços — por não conformidade. Nosso relatório sugere que tal ação pode ter impacto além da UE.',
          },
          {
            id: 'R8',
            title: 'Brasil: Consolidar princípios legais existentes em um marco dedicado de transparência para acesso a dados de plataformas.',
            full: 'As autoridades brasileiras devem desenvolver um marco dedicado à transparência de dados em mídias sociais, aproveitando as lições de esforços passados, consolidando princípios das leis existentes de proteção de dados, proteção ao consumidor e proteção da criança, e aproveitando a abordagem multissetorial de governança da internet do país.',
          },
          {
            id: 'R9',
            title: 'Reino Unido: Transitar de uma supervisão caso a caso para um marco dedicado de transparência usando o marco da Lei de Segurança Online.',
            full: 'O Reino Unido deve adotar um marco proativo para a transparência de dados das plataformas, inspirando-se nas lições do DSA da UE e ajudando a preencher a lacuna entre pesquisadores e instituições do Reino Unido e da UE.',
          },
          {
            id: 'R10',
            title: 'Brasil e Reino Unido: Esclarecer a legalidade e o uso ético do web scraping para pesquisa de interesse público',
            full: 'As autoridades brasileiras e do Reino Unido devem seguir as disposições do DSA sobre dados publicamente disponíveis e explicitamente apoiar o uso legal e ético do web scraping para pesquisa e supervisão de interesse público, particularmente onde a transparência fornecida pelas plataformas é insuficiente.',
          },
        ],
      },
      {
        stakeholder: 'Pesquisadores e Instituições de Interesse Público',
        items: [
          {
            id: 'R11',
            title: 'Promover consórcios internacionais de pesquisa e fomentar a colaboração interdisciplinar',
            full: 'Pesquisadores e instituições de pesquisa podem reunir conhecimento e recursos técnicos por meio de colaboração multinacional, intersetorial e interdisciplinar, apoiando ativamente os esforços regulatórios ao contribuir com expertise, documentar sucessos e fracassos, e trabalhar entre jurisdições para fortalecer a base de evidências para a governança global de plataformas. Conclamamos os financiadores de pesquisa a apoiar iniciativas de pesquisa transnacionais.',
          },
          {
            id: 'R12',
            title: 'Desenvolver estratégias de monitoramento para contextos de baixo acesso',
            full: 'Os pesquisadores devem desenvolver ferramentas de código aberto e projetar abordagens técnicas e metodológicas que possam ser prontamente implantadas em contextos com transparência de dados severamente restrita e recursos limitados, como ferramentas baseadas em navegador, pooling de dados em nuvem e doações de dados crowdsourced.',
          },
        ],
      },
    ],
  },

  download: {
    eyebrow: 'Download & Citação',
    title: 'Acesse o relatório completo',
    button: 'Baixar PDF',
    pdfUrl: 'https://github.com/NetLab-ECO-UFRJ/transparency_index/raw/main/report.pdf',
    onlineEdition: 'https://netlab-eco-ufrj.github.io/data_not_found/',
    onlineEditionLabel: 'Edição online com metodologia',
    citation: 'Santini, R. M., Leal, H., Salles, D., Belisário, A., Mattos, B., & Pinho, D. (2026). Data Not Found: Social Media Data Transparency for Information Integrity. NetLab UFRJ & Minderoo Centre for Technology and Democracy. https://doi.org/10.17863/CAM.128975',
    doi: 'https://doi.org/10.17863/CAM.128975',
  },
};
