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
      'As plataformas de mídia social estão evadindo o escrutínio público. Para avaliar as causas desse problema, pesquisadores do NetLab UFRJ (Universidade Federal do Rio de Janeiro, Brasil) e do Minderoo Centre for Technology and Democracy (Universidade de Cambridge, Reino Unido) desenvolveram o Índice de Transparência de Dados de Redes Sociais. O Índice mede as condições de acesso a dados em 15 grandes plataformas na União Europeia, no Reino Unido e no Brasil.',
      'Nossa avaliação abrange dados públicos de conteúdo gerado por usuários e dados de publicidade. Os resultados mostram que, na maioria dos casos, o acesso significativo aos dados está sendo negado. Independentemente dos marcos regulatórios nas três regiões, a opacidade é a norma e a transparência é a exceção. A falta de transparência nos dados de conteúdo gerado por usuários e de publicidade impede o monitoramento efetivo e independente de riscos individuais e sociais. Sem acesso a dados públicos, é impossível rastrear os fluxos de desinformação que ameaçam nossas democracias. Sem acesso a dados de publicidade, os atores do mercado não conseguem tomar decisões informadas e auditáveis. O regime de opacidade das plataformas de redes sociais está, portanto, possibilitando o retrocesso democrático e a fraude financeira.',
      'Nosso relatório recomenda ações coordenadas de múltiplos stakeholders para impor o escrutínio público sobre as plataformas de redes sociais. Essas ações incluem o estabelecimento de protocolos interoperáveis de acesso a dados e mecanismos para reduzir as disparidades regionais e de plataforma que minam a integridade global da informação.',
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
    title: 'Índice de Transparência de Dados Gerados por Usuários',
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
        statement: 'A transparência de dados em redes sociais permanece medíocre na UE, no Brasil e no Reino Unido.',
        body: 'Nossos resultados mostram que serviços amplamente utilizados não fornecem mecanismos de transparência de dados — nem para conteúdo gerado por usuários (UGC) nem para publicidade, incluindo tanto interfaces de programação de aplicações (APIs) quanto interfaces gráficas de usuário (GUIs) — em nenhuma das regiões avaliadas. O Reddit, por exemplo, oferece acesso programático a dados públicos de UGC, mas não a dados de publicidade em nenhuma região avaliada. O X (antigo Twitter) oferece acesso a dados públicos de UGC, mas sujeito a planos de preços proibitivos, enquanto seu repositório de publicidade, disponível apenas na UE, não retorna resultados. A Meta oferece acesso <span style="color:#496AB1">Significativo</span> a dados de publicidade no Reino Unido, mas sua pontuação de transparência de UGC foi considerada <span style="color:#EA4E54">Insignificante</span> em todas as regiões analisadas. Plataformas como TikTok e LinkedIn oferecem, na melhor das hipóteses, transparência <span style="color:#F3CB00">Insuficiente</span> ou <span style="color:#41B5DF">Limitada</span> tanto para dados de UGC quanto de publicidade.',
      },
      {
        statement: 'As disparidades no acesso a dados ao redor do mundo refletem um modelo de transparência seletiva orientado pela conformidade regulatória.',
        body: 'As condições de transparência variam entre jurisdições, particularmente para dados de publicidade, com acesso mais robusto observado no Reino Unido e na UE, regiões com marcos regulatórios mais sólidos — ou, no caso do Reino Unido, potencialmente refletindo transbordamentos regulatórios. O Brasil, que não possui um marco dedicado à transparência de plataformas, registra consistentemente os menores níveis de acesso a dados. Em média, o Reino Unido apresenta pontuações comparativamente mais próximas às da UE.',
      },
      {
        statement: 'Mecanismos robustos para acesso a dados públicos de conteúdo gerado por usuários são escassos.',
        body: "O Bluesky e o YouTube foram as únicas plataformas cujas APIs públicas foram consideradas <span style='color:#496AB1'>Significativas</span> em nossa análise, de forma consistente em todas as regiões avaliadas. Elas não diferenciam o conteúdo público que pode ser recuperado, e suas funcionalidades tiveram bom desempenho em nossos testes. O X, o Telegram e o Reddit apresentam limitações em suas APIs — notavelmente, no caso do X, os custos associados ao acesso. Os dados públicos de UGC do Facebook e Instagram só podem ser acessados por meio da Meta Content Library, cuja API é restrita a ambientes seguros e controlados e não permite a extração de dados desagregados para a infraestruturas particulares de usuários. Embora plataformas como LinkedIn e TikTok ofereçam APIs para pesquisadores no âmbito do DSA, o Pinterest e o Snapchat apenas aceitam solicitações de dados de pesquisadores, o que é considerado insuficiente sob nossa abordagem metodológica.",
      },
      {
        statement: 'As ferramentas existentes para acesso e exportação de dados de publicidade permanecem demasiado limitadas para um escrutínio significativo.',
        body: 'A dependência de APIs e GUIs com capacidades de pesquisa limitadas, combinada com o acesso restrito a dados granulares, impede que os pesquisadores avaliem eficazmente as práticas de segmentação, o alcance da publicidade e os impactos sociais mais amplos da publicidade online. Plataformas como Meta, LinkedIn e TikTok permitem que anúncios sejam consultados usando palavras-chave, mas outras, incluindo X, Google (YouTube) e Pinterest, não permitem, limitando a descoberta e recuperação de dados a buscas baseadas em nomes de anunciantes. Além disso, as plataformas divulgam dados de alcance e segmentação em faixas de valores demasiado amplas, restringindo ainda mais tanto o escrutínio independente quanto a capacidade dos anunciantes de medir com precisão o desempenho das campanhas e o retorno sobre o investimento.',
      },
    ],
  },

  recommendations: {
    eyebrow: 'Recomendações',
    title: 'Um chamado à ação multissetorial',
    groups: [
      {
        stakeholder: 'Plataformas de Redes Sociais',
        items: [
          {
            id: 'R1',
            title: 'Garantir acesso universal e significativo a todos os dados de publicidade',
            full: 'As plataformas devem oferecer acesso gratuito, aberto e programático a repositórios de publicidade que reúnam o conjunto completo de dados sobre anúncios, por meio de APIs e interfaces gráficas que atendam a padrões rigorosos de qualidade e não diferenciem o acesso com base no conteúdo do anúncio. Isso é fundamental para permitir que pesquisadores e reguladores identifiquem riscos, avaliem a conformidade e assegurem a responsabilização nos ecossistemas de informação online.',
          },
          {
            id: 'R2',
            title: 'Garantir acesso universal e significativo a dados públicos gerados por usuários para fins de interesse público',
            full: 'As plataformas devem oferecer acesso gratuito, aberto e programático a dados de conteúdos públicos gerados por usuários, fora de ambientes controlados ou restritos, garantindo padrões claros de integridade e qualidade e disponibilizando esses dados por meio de APIs e interfaces gráficas que atendam a diferentes níveis de capacidade técnica. Isso é fundamental para assegurar o cumprimento das obrigações legais pelas plataformas e para que cidadãos e tomadores de decisão tenham acesso às informações essenciais de que precisam.',
          },
          {
            id: 'R3',
            title: 'Acabar com práticas seletivas e fragmentadas de transparência de dados',
            full: 'As plataformas devem alinhar suas práticas globais de transparência, tanto para dados de conteúdos gerados por usuários quanto de publicidade, aos padrões mais abertos disponíveis, em vez de se limitarem a níveis mínimos de conformidade ou a exigências específicas de cada jurisdição. Isso é essencial para reduzir a transparência seletiva decorrente de uma supervisão regulatória desigual.',
          },
          {
            id: 'R4',
            title: ' Fornecer acesso a dados não públicos a pesquisadores devidamente credenciados, nos limites estabelecidos pela regulação e supervisão democrática.',
            full: 'O acesso a dados não públicos das plataformas é essencial para monitorar os riscos e danos que elas podem gerar, bem como para auditar de forma independente as métricas de transparência que divulgam. Na União Europeia, esse tipo de acesso já é formalmente previsto no Artigo 40 do DSA. Embora este relatório não avalie diretamente o acesso a dados não públicos, destacamos a importância de estabelecer processos robustos de credenciamento de pesquisadores e protocolos seguros que permitam sua disponibilização de forma responsável.',
          },
          {
            id: 'R5',
            title: 'Fornecer acesso a dados sobre conteúdos moderados e removidos',
            full: 'Esses dados, tanto no nível de conteúdos gerados por usuários quanto de publicidade, são essenciais para compreender ameaças à integridade da informação e avaliar como as plataformas as enfrentam e moderam. As empresas devem preservar essas informações em bases auditáveis, em vez de apagá-las ou permitir sua perda.',
          },
        ],
      },
      {
        stakeholder: 'Governança Internacional',
        items: [
          {
            id: 'R6',
            title: 'Promover a agenda de integridade da informação por meio de padrões de transparência e acesso a dados.',
            full: 'Os mecanismos de transparência de dados devem evoluir de compromissos autorregulados para estruturas regulatórias juridicamente vinculantes, capazes de garantir uma supervisão efetiva. Esse processo deve ser apoiado pelo estabelecimento e pela promoção de princípios e normas internacionais que orientem as dimensões técnicas, éticas e operacionais do acesso a dados.',
          },
        ],
      },
      {
        stakeholder: 'Regulação Regional',
        items: [
          {
            id: 'R7',
            title: 'União Europeia: Aplicar integralmente os Artigos 39 e 40 da Lei de Serviços Digitais.',
            full: 'A Comissão Europeia deve assegurar a implementação efetiva dos mecanismos de acesso a dados de publicidade e de conteúdos gerados por usuários, por meio de protocolos padronizados, e estar preparada para impor sanções significativas — incluindo multas substanciais e, quando necessário, a suspensão temporária de serviços — em caso de descumprimento. Nosso relatório sugere que essa medida pode gerar impactos que vão além dos limites da UE.',
          },
          {
            id: 'R8',
            title: 'Brasil: Consolidar princípios jurídicos existentes em um marco de transparência específico para o acesso a dados de plataformas digitais.',
            full: 'As autoridades brasileiras devem desenvolver um marco específico de transparência para dados de plataformas de redes sociais, incorporando lições de iniciativas internacionais e, ao mesmo tempo, consolidando princípios já presentes nas legislações de proteção de dados, defesa do consumidor e proteção da criança. Esse esforço deve se apoiar na tradição multissetorial de governança da internet adotada pelo país.',
          },
          {
            id: 'R9',
            title: 'Reino Unido: Superar a supervisão caso a caso e avançar para normas de transparência e acesso a dados.',
            full: 'O Reino Unido deve adotar um marco proativo de transparência para dados de plataformas digitais, inspirado nas lições do DSA da União Europeia, e contribuir para reduzir a lacuna entre pesquisadores e instituições do país e do bloco europeu.',
          },
          {
            id: 'R10',
            title: 'Brasil e Reino Unido: Estabelecer a legalidade e o uso ético de técnicas de raspagem de dados para fins de pesquisa de interesse público.',
            full: 'As autoridades brasileiras e britânicas devem se alinhar às disposições do DSA sobre dados publicamente disponíveis e apoiar explicitamente o uso legal e ético da extração de dados da web para fins de pesquisa e fiscalização de interesse público, especialmente nos casos em que a transparência oferecida pelas plataformas seja insuficiente.',
          },
        ],
      },
      {
        stakeholder: 'Pesquisadores e Instituições de Interesse Público',
        items: [
          {
            id: 'R11',
            title: 'Promover consórcios internacionais de pesquisa e fomentar a colaboração interdisciplinar',
            full: 'Pesquisadores e instituições de pesquisa podem compartilhar conhecimento e recursos técnicos por meio de colaborações multinacionais, intersetoriais e interdisciplinares, apoiando ativamente esforços regulatórios ao contribuir com sua expertise, documentar sucessos e fracassos e atuar em diferentes jurisdições para fortalecer a base de evidências para a governança global das plataformas. Encorajamos financiadores de ciência, tecnologia e inovação a apoiar iniciativas de pesquisa transnacionais.',
          },
          {
            id: 'R12',
            title: 'Desenvolver estratégias de monitoramento para ambientes com baixo acesso a dados',
            full: 'Pesquisadores devem criar ferramentas de código aberto e desenvolver abordagens técnicas e metodológicas que possam ser facilmente implementadas em contextos de transparência de dados severamente limitada e com restrições de recursos, incluindo ferramentas baseadas em navegador, compartilhamento de dados em nuvem e iniciativas colaborativas de doação de dados.',
          },
        ],
      },
    ],
  },

  heatmap: {
    all: 'Todos',
    sortBtn: '↕ Ordenar por pontuação',
    platformCol: 'Plataforma',
    footnote: '† VLOP — Plataforma Online Muito Grande (Very Large Online Platform), designada nos termos do Regulamento dos Serviços Digitais (DSA) da UE.',
    tiers: {
      'Meaningful':    'Significativo',
      'Limited':       'Limitado',
      'Deficient':     'Insuficiente',
      'Minimal':       'Precário',
      'Negligible':    'Insignificante',
      'Not Available': 'Indisponível',
    },
    regions: {
      brazil: 'Brasil',
      eu: 'UE',
      uk: 'RU',
    },
  },

  download: {
    eyebrow: 'Download & Citação',
    citationLabel: 'Como citar',
    title: 'Acesse o relatório completo',
    button: 'Baixar PDF',
    pdfUrl: 'https://github.com/NetLab-ECO-UFRJ/transparency_index/raw/main/report.pdf',
    onlineEdition: 'https://netlab-eco-ufrj.github.io/data_not_found/',
    onlineEditionLabel: 'Edição online com metodologia',
    citation: 'Santini, R. M., Leal, H., Salles, D., Belisário, A., Mattos, B., & Pinho, D. (2026). Data not found: Transparência de redes sociais para a integridade da informação. NetLab UFRJ e Minderoo Centre for Technology & Democracy. https://doi.org/10.17863/CAM.128975',
    doi: 'https://doi.org/10.17863/CAM.128975',
  },
};
