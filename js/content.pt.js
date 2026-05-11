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
    subtitle: 'Transparência de redes sociais para a integridade da informação',
    institution: 'NetLab UFRJ & Minderoo Centre for Technology and Democracy · 2026',
    cta: 'Role para explorar',
  },

  problem: {
    eyebrow: 'Visão Geral',
    title: 'Data Not Found: Transparência de redes sociais para a integridade da informação',
    body: [
      'As plataformas de redes sociais estão cada vez menos transparentes ao escrutínio público. Para compreender melhor esse cenário, pesquisadores do NetLab UFRJ (Universidade Federal do Rio de Janeiro, Brasil) e do Minderoo Centre for Technology and Democracy (Universidade de Cambridge, Reino Unido) desenvolveram o Índice de Transparência de Redes Sociais. O Índice mede as condições de acesso a dados em 15 grandes plataformas na União Europeia, no Reino Unido e no Brasil.',
      'Nossa avaliação abrange dados públicos de conteúdos gerados por usuários e dados de publicidade. Os resultados mostram que, na maioria dos casos, o acesso significativo aos dados está sendo negado. Independentemente dos marcos regulatórios nas três regiões, a opacidade é a norma e a transparência é a exceção. A falta de transparência nos dados de conteúdos gerados por usuários e de publicidade impede o monitoramento efetivo e independente de riscos individuais e sociais. Sem acesso a dados públicos, é impossível rastrear os fluxos de desinformação que ameaçam nossas democracias. Sem acesso a dados de publicidade, os atores do mercado não conseguem tomar decisões informadas e auditáveis. O regime de opacidade das plataformas de redes sociais está, portanto, possibilitando o retrocesso democrático e a fraude financeira.',
      'Nosso relatório propõe uma atuação coordenada de diferentes setores para ampliar o escrutínio público sobre as plataformas de redes sociais. Essas ações incluem o estabelecimento de protocolos interoperáveis de acesso a dados e mecanismos para reduzir as disparidades regionais e de plataforma que minam a integridade global da informação.',
    ],
  },

  aboutIndex: {
    eyebrow: 'Sobre o Índice',
    title: 'O Índice de Transparência de Redes Sociais',
    body: [
      'Este Índice resume a primeira avaliação sistemática das condições de acesso a dados em 15 grandes plataformas de mídia social em três contextos regulatórios: a União Europeia, o Reino Unido e o Brasil. Partindo do princípio, reconhecido pelas Nações Unidas, de que a transparência depende da disponibilidade de dados de alta qualidade, o Índice avalia as plataformas com base em critérios de qualidade dos dados.',
      'O acesso a dados de conteúdos gerados por usuários e a dados de publicidade é avaliado separadamente, por meio de uma metodologia de código aberto fundamentada em testes empíricos. As plataformas são pontuadas em uma escala de 100 pontos, com critérios especiais correspondendo a 75% e indicadores adicionais de qualidade de dados a 25% da pontuação.',
      'Além de medir se o acesso existe, o Índice examina como e sob quais condições os dados são disponibilizados. Dados de alta qualidade são essenciais para pesquisa independente, formulação eficaz de políticas e responsabilização significativa.',
    ],
    legendLabel: 'Categorias de pontuação',
  },

  ugc: {
    eyebrow: '',
    title: 'Índice de transparência de dados de conteúdos gerados por usuários',
    lead: 'Acesso a dados públicos de conteúdos gerados por usuários em 15 plataformas e 3 regiões.',
  },

  ads: {
    eyebrow: '',
    title: 'Índice de transparência de dados em publicidade',
    lead: 'Acesso a dados de publicidade em 14 plataformas e 3 regiões. O Bluesky é excluído por não ter publicidade.',
  },

  findings: {
    eyebrow: 'Principais Resultados',
    title: 'O que os dados revelam',
    items: [
      {
        statement: 'A transparência de dados nas plataformas de redes sociais permanece baixa na União Europeia, no Brasil e no Reino Unido.',
        body: 'Nossos resultados mostram que serviços amplamente utilizados não oferecem mecanismos adequados de acesso a dados — seja por meio de APIs ou de interfaces gráficas — de conteúdos gerados por usuários ou de publicidade, em nenhuma das regiões avaliadas. O Reddit, por exemplo, disponibiliza acesso programático a dados de conteúdos públicos gerados por usuários, mas não oferece acesso a dados de publicidade em nenhuma região. O X (antigo Twitter) também permite o acesso a dados de conteúdos públicos gerados por usuários, porém a custos proibitivos, enquanto seu repositório de publicidade, disponível apenas na UE, não retorna resultados. Já a Meta apresenta acesso <span style="color:#496AB1">Significativo</span> a dados de publicidade no Reino Unido, mas sua transparência em relação a conteúdos gerados por usuários foi classificada como <span style="color:#EA4E54">Insignificante</span> em todas as regiões analisadas. Plataformas como TikTok e LinkedIn, por sua vez, oferecem, na melhor das hipóteses, níveis de transparência <span style="color:#F3CB00">Insuficientes</span> ou <span style="color:#41B5DF">Limitados</span> tanto para dados de conteúdos gerados por usuários quanto para dados de publicidade.',
      },
      {
        statement: 'As disparidades no acesso a dados ao redor do mundo refletem um modelo de transparência seletiva, orientado pela conformidade regulatória.',
        body: 'As condições variam entre jurisdições — especialmente no caso dos dados de publicidade —, com níveis mais elevados de acesso no Reino Unido e na UE, onde há estruturas regulatórias mais robustas ou, no caso britânico, possíveis efeitos indiretos dessas regulações. O Brasil, por sua vez, não conta com um marco específico para a transparência das plataformas e apresenta, de forma consistente, os níveis mais baixos de acesso a dados. Em média, o Reino Unido registra resultados mais próximos aos da UE.',
      },
      {
        statement: 'Mecanismos robustos de acesso a dados de conteúdos públicos gerados por usuários ainda são escassos.',
        body: "Bluesky e YouTube foram as únicas plataformas cujas APIs públicas alcançaram, de forma consistente em todas as regiões avaliadas, um nível de acesso considerado <span style='color:#496AB1'>Significativo</span> em nossa análise. Nessas plataformas, não há restrições quanto ao tipo de conteúdo público que pode ser recuperado, e as funcionalidades disponíveis tiveram bom desempenho nos testes realizados. X, Telegram e Reddit, por sua vez, apresentam limitações em suas APIs — no caso do X, sobretudo pelos custos associados ao acesso. Já os dados de conteúdos públicos gerados por usuários do Facebook e do Instagram só podem ser acessados por meio da Biblioteca de Conteúdos da Meta, cuja API é restrita a ambientes seguros e controlados e não permite a extração de dados desagregados para a infraestrutura do próprio usuário. Embora plataformas como LinkedIn e TikTok ofereçam APIs para pesquisadores no contexto do DSA na UE, Pinterest e Snapchat operam apenas com solicitações diretas de dados por parte de pesquisadores, o que é considerado insuficiente segundo nossa abordagem metodológica.",
      },
      {
        statement: 'As ferramentas disponíveis para acessar e exportar dados de publicidade ainda são bastante limitadas para análises mais aprofundadas.',
        body: 'Pesquisadores enfrentam dificuldades para avaliar de forma consistente as práticas de segmentação, o alcance dos anúncios e seus impactos sociais mais amplos, devido às limitações das APIs e interfaces gráficas, que oferecem capacidades restritas de busca e acesso limitado a dados granulares. Plataformas como Meta, LinkedIn e TikTok permitem a busca de anúncios por palavras-chave, mas outras — como X, Google (YouTube) e Pinterest — não oferecem esse recurso, restringindo a descoberta e a coleta de dados a pesquisas baseadas nos nomes dos anunciantes. Além disso, muitas plataformas divulgam dados de alcance e segmentação em faixas amplas, o que limita tanto a análise independente quanto a capacidade dos próprios anunciantes de avaliar com precisão o desempenho das campanhas e o retorno sobre o investimento.',
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
            title: 'Garantir acesso universal e significativo a dados de conteúdos públicos gerados por usuários para fins de interesse público.',
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
    vlopBadge: '*',
    footnote: '* Plataforma Digital Muito Grande, designada nos termos da Lei de Serviços Digitais (DSA).',
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
      eu: 'União Europeia',
      uk: 'Reino Unido',
    },
  },

  download: {
    eyebrow: 'Download & Citação',
    citationLabel: 'Como citar',
    title: 'Acesse o relatório completo',
    button: 'Baixar PDF',
    pdfUrl: 'https://github.com/NetLab-ECO-UFRJ/transparency_index/raw/main/report_pt.pdf',
    onlineEdition: 'https://netlab-eco-ufrj.github.io/data_not_found/',
    onlineEditionLabel: 'Edição online com metodologia',
    citation: 'Santini, R. M., Leal, H., Salles, D., Belisário, A., Mattos, B., & Pinho, D. (2026). Data not found: Transparência de redes sociais para a integridade da informação. NetLab UFRJ e Minderoo Centre for Technology & Democracy. https://doi.org/10.17863/CAM.128975',
    doi: 'https://doi.org/10.17863/CAM.128975',
  },
};
