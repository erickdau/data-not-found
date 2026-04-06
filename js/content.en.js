// js/content.en.js
// All English user-facing text. Swap this file for a pt.js equivalent for Portuguese.
export const content = {
  nav: {
    logo: 'DATA NOT FOUND',
    links: [
      { label: 'Overview', href: '#problem' },
      { label: 'The Index',   href: '#about-index' },
      { label: 'Findings',    href: '#findings' },
      { label: 'Recommendations', href: '#recommendations' },
      { label: 'Download',    href: '#download' },
    ],
  },

  hero: {
    title: ['DATA', 'NOT', 'FOUND'],
    subtitle: 'Social Media Data Transparency for Information Integrity',
    institution: 'NetLab UFRJ & Minderoo Centre for Technology and Democracy · 2026',
    cta: 'Scroll to explore',
  },

  problem: {
    eyebrow: 'Overview',
    title: 'Data Not Found: Social Media Data Transparency for Information Integrity',
    body: [
      'Social media platforms are evading public scrutiny. To assess the root causes of this problem, researchers at NetLab UFRJ (Federal University of Rio de Janeiro, Brazil) and the Minderoo Centre for Technology and Democracy (University of Cambridge, UK) developed the Social Media Data Transparency Index. The index measures data access conditions across 15 major platforms in the EU, the UK and Brazil.',
      'Our evaluation covers public user-generated content and advertising data. The findings show that, in most cases, meaningful access is being denied. Regardless of the regulatory frameworks across the 3 regions, opacity is the norm and transparency the exception. Lack of transparency in user-generated content and advertising data prevents effective and independent monitoring of individual and societal risks. Without access to public data, it is impossible to track the disinformation flows that are threatening our democracies. Without access to advertising data, market actors cannot make informed and auditable decisions. The opacity regime of social media platforms is thus enabling democratic backsliding and financial fraud.',
      'Our report recommends coordinated multistakeholder actions to enforce public scrutiny over social media platforms. These include the establishment of interoperable data access protocols and mechanisms to reduce regional and platform-level disparities that undermine global information integrity.',
    ],
  },

  aboutIndex: {
    eyebrow: 'About the Index',
    title: 'The Social Media Data Transparency Index',
    body: [
        'This Index summarizes the first systematic assessment of data access conditions across 15 major social media platforms in three regulatory contexts: the European Union, the United Kingdom, and Brazil. Based on the principle, recognized by the United Nations, that transparency is only meaningful when supported by high-quality data, the Index evaluates platforms  using a data quality–driven framework.',
        'User-generated content and advertising data are assessed separately, through an open-source methodology grounded in empirical testing. Platforms are  scored on a 100-point scale, with special criteria accounting for 75% and additional data quality indicators for 25% of the score.', 
        'Beyond measuring whether access exists, the Index examines how and under what conditions data is made available. High-quality data is essential for independent research, effective policymaking, and meaningful accountability.',
    ],
    legendLabel: 'Score bands',
  },

  ugc: {
    eyebrow: '',
    title: 'UGC Data Transparency Index',
    lead: 'Access to public user-generated content data across 15 platforms and 3 regions.',
  },

  ads: {
    eyebrow: '',
    title: 'Advertising Transparency Index',
    lead: 'Access to advertising data across 14 platforms and 3 regions. Bluesky is excluded as it has no advertising.',
  },

  findings: {
    eyebrow: 'Key Findings',
    title: 'What the data tells us',
    items: [
      {
        statement: 'Social media data transparency remains poor across the EU, Brazil and the UK.',
        body: 'Our findings show that widely used services provide no data transparency mechanisms for either user-generated content (UGC) or advertising, including both application programming interfaces (APIs) and graphical user interfaces (GUIs), across any of the assessed regions. Reddit, for instance, provides programmatic access to public UGC data but not to advertising data in any region assessed. X (formerly Twitter) offers access to public UGC data, but subject to prohibitive pricing structures, while its advertising repository, available only in the EU, returns no results. While Meta provides <span style="color:#496AB1">Meaningful</span> access to advertising data in the UK, its UGC transparency score was deemed <span style="color:#EA4E54">Negligible</span> across all analysed regions. Platforms such as TikTok and LinkedIn offer, at best, <span style="color:#F3CB00">Deficient</span> or <span style="color:#41B5DF">Limited</span> transparency for both UGC and advertising data.',
      },
      {
        statement: 'Disparities in data access around the world reflect a compliance-driven model of selective transparency.',
        body: 'Transparency conditions vary across jurisdictions, particularly for advertising data, with stronger access observed in the UK and the EU, regions with more robust regulatory frameworks—or, in the case of the UK, potentially reflecting regulatory spillovers. Brazil, which lacks a dedicated framework for platform transparency, consistently records the lowest levels of  data access. On average, the UK scores comparatively closer to the EU.',
      },
      {
        statement: 'Robust mechanisms for accessing public user-generated content data are scarce.',
        body: "Bluesky and YouTube were the only platforms whose public APIs were deemed <span style='color:#496AB1'>Meaningful</span> in our analysis, consistently across all regions assessed. They do not differentiate the public content that can be retrieved, and their functionalities performed well in our tests. X, Telegram, and Reddit present limitations in their APIs—most notably, in the case of X, the costs associated with access. Public UGC data from Facebook and Instagram can only be accessed through the Meta Content Library, whose API is restricted to secure and controlled environments and does not allow for the extraction of disaggregated data to users' own infrastructure. While platforms such as LinkedIn and TikTok offer researcher APIs under the DSA, Pinterest and Snapchat only accept data requests from researchers, which is considered insufficient under our methodological approach.",
      },
      {
        statement: 'Existing tools for accessing and exporting advertising data remain too limited for meaningful scrutiny.',
        body: `The reliance on APIs and GUIs with limited search capabilities, combined with restricted access to granular data, prevents researchers from effectively assessing targeting practices, advertising reach, and the broader societal impacts of online advertising. Platforms such as Meta, LinkedIn, and TikTok allow ads to be queried using keywords, but others, including X, Google (YouTube), and Pinterest do not, limiting data discovery and retrieval to searches based on advertiser names. In addition, platforms disclose reach and targeting data in broad value ranges, further restricting both independent scrutiny and advertisers' ability to accurately measure campaign performance and return on investment.`,
      },
      
    ],
  },

  recommendations: {
    eyebrow: 'Recommendations',
    title: 'A call for multistakeholder action',
    groups: [
      {
        stakeholder: 'Social Media Companies',
        items: [
          {
            id: 'R1',
            title: 'Ensure meaningful universal access to all advertising data',
            full: 'Platforms should provide free, programmatic, and open access to advertising repositories containing the full dataset of ad data, made available through both APIs and GUIs, that meet robust data quality standards and do not differentiate access based on ad content. This is essential for equipping researchers and regulators to identify risks, evaluate compliance, and enforce accountability in online information ecosystems.',
          },
          {
            id: 'R2',
            title: 'Ensure meaningful universal access to public user-generated data for public-interest uses',
            full: 'Platforms should provide free, programmatic, and non-discretionary access to public UGC data outside controlled or secure environments, ensuring it meets clear standards of completeness and quality and is made available through both APIs and GUIs to accommodate different levels of technical capacity and expertise. This is central for ensuring that social media platforms meet their legal requirements and that citizens and decision-makers can access critical information that they need.',
          },
          {
            id: 'R3',
            title: 'End selective and fragmented data transparency practices',
            full: 'Platforms should align their global UGC and advertising data transparency practices with the most open standards, rather than relying on minimal or jurisdiction-specific compliance, thereby minimising selective transparency driven by uneven regulatory oversight.',
          },
          {
            id: 'R4',
            title: 'Provide vetted researchers with access to non-public data within the limits defined by democratic regulation and oversight.',
            full: `Access to non-public platform data is essential for monitoring platform-enabled risks and harms, as well as for independently auditing platforms' selfreported transparency metrics. Under Article 40 of the DSA, such access is formally regulated. Although this report does not examine access to non-public data, we emphasise the need for robust researcher vetting processes and secure protocols to enable its responsible availability.`,
          },
          {
            id: 'R5',
            title: 'Provide access to data on moderated and removed content',
            full: 'This data, for both UGC and advertising, is crucial for understanding threats to information integrity and assessing how platforms address and moderate them. Companies should retain such information in auditable databases, rather than erasing or losing it.',
          },
          
        ],
      },
      {
        stakeholder: 'International Governance Bodies',
        items: [
          {
            id: 'R6',
            title: 'Advance the information integrity agenda through data access and transparency standards.',
            full: 'Data transparency mechanisms should move from self-regulated commitments to legally binding regulatory frameworks that enable effective oversight. These should be supported by the establishment and promotion of international principles and standards governing the technical, ethical, and operational dimensions of data access.',
          },
          
        ],
      },
      {
        stakeholder: 'Regional Regulation',
        items: [
          {
            id: 'R7',
            title: 'European Union: Fully enforce Articles 39 and 40 of the Digital Services Act.',
            full: 'The European Commission should ensure the effective implementation of advertising and public UGC data access mechanisms through standardised protocols and be prepared to impose meaningful penalties—including substantial fines and, where necessary, temporary suspension of services—for non-compliance. Our report suggests doing so may have an impact beyond the EU.',
          },
          {
            id: 'R8',
            title: 'Brazil: Consolidate existing legal principles into a dedicated transparency framework for platform data access.',
            full: `Brazilian authorities should develop a dedicated framework for social media data transparency, building on lessons from past efforts, consolidating principles from existing data protection, consumer protection, and child protection laws, and leveraging the country's multistakeholder internet governance approach.`,
          },
          {
            id: 'R9',
            title: 'United Kingdom: Move from case-by-case oversight toward a dedicated transparency framework for platform data access using the Online Safety Act framework.',
            full: `The UK should adopt a proactive framework for platform data transparency, drawing on lessons from the EU's DSA and helping to bridge the gap between UK and EU-based researchers and institutions.`,
          },
          {
            id: 'R10',
            title: 'Brazil and the United Kingdom: Clarify the legality and ethical use of web scraping for public-interest research',
            full: `Brazilian and UK authorities should follow the DSA's provisions on publicly available data and explicitly support the legal and ethical use of web scraping for public-interest research and oversight, particularly where platform-provided transparency is insufficient.`,
          },
        ],
      },
      {
        stakeholder: 'Public-Interest Researchers and Institutions',
        items: [
          {
            id: 'R11',
            title: 'Promote international research consortia and foster interdisciplinary collaboration',
            full: 'Researchers and research institutions could pool knowledge and technical resources through multinational, cross-sector, and interdisciplinary collaboration, actively supporting regulatory efforts by contributing expertise, documenting successes and failures, and working across jurisdictions to strengthen the evidence base for global platform governance. We call on research funders to support cross-national research initiatives.',
          },
          {
            id: 'R12',
            title: 'Develop monitoring strategies for low-access settings',
            full: 'Researchers should develop open-source tools and design technical and methodological approaches that can be readily deployed in contexts with severely restricted data transparency and limited resources, such as browser-based tools, cloud-based data pooling, and crowdsourced data donations.',
          },
        ],
      },
    ],
  },

  download: {
    eyebrow: 'Download & Cite',
    title: 'Access the full report',
    button: 'Download PDF',
    pdfUrl: 'https://github.com/NetLab-ECO-UFRJ/transparency_index/raw/main/report.pdf',
    onlineEdition: 'https://netlab-eco-ufrj.github.io/data_not_found/',
    onlineEditionLabel: 'Online edition with methodology',
    citation: 'Santini, R. M., Leal, H., Salles, D., Belisário, A., Mattos, B., & Pinho, D. (2026). Data Not Found: Social Media Data Transparency for Information Integrity. NetLab UFRJ & Minderoo Centre for Technology and Democracy. https://doi.org/10.17863/CAM.128975',
    doi: 'https://doi.org/10.17863/CAM.128975',
  },
};