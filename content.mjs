// All page text, per language. {company} fields are filled in from site.config.json by build.mjs.
// Keep both languages in step: every page has the same slugs and sections.

export const ui = {
  en: {
    htmlLang: 'en',
    skip: 'Skip to content',
    nav: { home: 'Home', contact: 'Contact' },
    navLabel: 'Main',
    switchTo: 'Norsk',
    footerNoTracking: 'This site uses no cookies, analytics or third-party scripts.',
  },
  nb: {
    htmlLang: 'nb',
    skip: 'Hopp til innhold',
    nav: { home: 'Hjem', contact: 'Kontakt' },
    navLabel: 'Hovedmeny',
    switchTo: 'English',
    footerNoTracking: 'Dette nettstedet bruker ingen cookies, analyse eller tredjepartsskript.',
  },
};

export const files = {
  en: { home: 'index.html', contact: 'contact.html' },
  nb: { home: 'index.html', contact: 'kontakt.html' },
};

const facts = (c, l) => `<dl class="facts">
  <dt>${l.name}</dt><dd>${c.name}</dd>
  <dt>${l.org}</dt><dd>${c.orgNumber}</dd>
  <dt>${l.vat}</dt><dd>${c.vat}</dd>
  <dt>${l.address}</dt><dd>${c.address}</dd>
  <dt>${l.email}</dt><dd><a href="mailto:${c.email}">${c.email}</a></dd>
</dl>`;

export const pages = {
  en: {
    home: {
      title: 'Sharpnet AS: software and apps from Ålesund',
      description:
        'Sharpnet AS is a Norwegian software company based in Ålesund. We build and publish mobile apps and software. Company details and contact information.',
      body: ({ company }) => `
<section class="hero">
  <h1>Sharpnet AS</h1>
  <p class="lead">A Norwegian software company based in Ålesund. We build and publish mobile apps and software.</p>
</section>
<h2>Company details</h2>
${facts(company, { name: 'Company', org: 'Organisation number', vat: 'VAT', address: 'Address', email: 'E-mail' })}
<p>Questions? See <a href="contact.html">Contact</a>.</p>`,
    },
    contact: {
      title: 'Contact: Sharpnet AS',
      description: 'Contact Sharpnet AS in Ålesund, Norway: e-mail and postal address.',
      body: ({ company }) => `
<h1>Contact</h1>
<p class="lead">Write to <a href="mailto:${company.email}">${company.email}</a>. We normally reply within a few working days.</p>
<h2>Postal address</h2>
<p>${company.name}<br>${company.address}</p>`,
    },
  },
  nb: {
    home: {
      title: 'Sharpnet AS: programvare og apper fra Ålesund',
      description:
        'Sharpnet AS er et norsk programvareselskap i Ålesund. Vi lager og publiserer mobilapper og programvare. Selskapsopplysninger og kontaktinformasjon.',
      body: ({ company }) => `
<section class="hero">
  <h1>Sharpnet AS</h1>
  <p class="lead">Et norsk programvareselskap i Ålesund. Vi lager og publiserer mobilapper og programvare.</p>
</section>
<h2>Selskapsopplysninger</h2>
${facts(company, { name: 'Selskap', org: 'Organisasjonsnummer', vat: 'MVA', address: 'Adresse', email: 'E-post' })}
<p>Spørsmål? Se <a href="kontakt.html">Kontakt</a>.</p>`,
    },
    contact: {
      title: 'Kontakt: Sharpnet AS',
      description: 'Kontakt Sharpnet AS i Ålesund: e-post og postadresse.',
      body: ({ company }) => `
<h1>Kontakt</h1>
<p class="lead">Skriv til <a href="mailto:${company.email}">${company.email}</a>. Vi svarer normalt innen noen få virkedager.</p>
<h2>Postadresse</h2>
<p>${company.name}<br>${company.address}</p>`,
    },
  },
};
