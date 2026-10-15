/*
  Instituut Soleil: single source for practical info, treatments and prices.
  Source: prijslijst 2026 + feedback Saskia (post-its, Word document, mail), 9 to 15 Oct 2026.
  See feedback/FEEDBACK-TRACKER.md for every change.
*/

export const info = {
  name: 'Instituut Soleil',
  owner: 'Saskia',
  tagline: 'Stralen begint bij een huid in balans',
  years: 27,
  street: 'Rivierstraat 70',
  city: '9080 Beervelde',
  phone: '0470 22 92 02',
  phoneHref: 'tel:+32470229202',
  email: 'info@instituutsoleil.be',
  booking: 'https://booking.optios.net/18875',
  webshop: 'https://www.webshopsoleil.be/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Rivierstraat+70+9080+Beervelde',
  instagram: 'https://www.instagram.com/instituutsoleil/',
  facebook: 'https://www.facebook.com/Instituut-Soleil-1582526178629782/',
  vat: 'BE 0837.999.371',
};

/* d: 0 = zondag … 6 = zaterdag */
export type Day = { day: string; short: string; d: number; open?: string; close?: string; note?: string };
export const hours: Day[] = [
  { day: 'Maandag', short: 'Ma', d: 1, open: '09:00', close: '18:00' },
  { day: 'Dinsdag', short: 'Di', d: 2, open: '08:00', close: '18:30' },
  { day: 'Woensdag', short: 'Wo', d: 3 },
  { day: 'Donderdag', short: 'Do', d: 4, open: '08:00', close: '20:00' },
  { day: 'Vrijdag', short: 'Vr', d: 5, open: '08:00', close: '18:00' },
  { day: 'Zaterdag', short: 'Za', d: 6, open: '09:00', close: '13:30', note: 'namiddag op afspraak' },
  { day: 'Zondag', short: 'Zo', d: 0 },
];
export const time = (s?: string) => s?.replace(':00', 'u').replace(':', 'u').replace(/^0/, '');

/* [naam, duur, prijs, toelichting?]. prijs: number in euro, string for ranges or notes */
export type Row = [string, string, number | string, string?];
export type PriceGroup = { title?: string; line?: string; rows: Row[]; note?: string };

export const euro = (v: number | string) => (typeof v === 'number' ? `€${v}` : v);

/* ---------- Huidverbetering: one page each ---------- */
export type Group = 'Huidverbetering' | 'Ontspanning';
export type Treatment = {
  slug: string;
  group?: Group;
  name: string;
  sub: string;
  img: string;
  alt: string;
  from: number;
  intro: string;
  prices: PriceGroup[];
  tip?: string;
  note?: string;
  link?: { href: string; label: string };
  parts?: { id: string; name: string; img: string; alt: string; text: string; prices: PriceGroup[] }[];
};

export const discovery: Row = ['Skin Discovery', '90 min', 105, 'analyse + verzorging + advies, 1e kennismakingsbehandeling'];

export const skin: Treatment[] = [
  {
    slug: 'skin-discovery',
    name: 'Skin Discovery',
    sub: 'nieuw? start hier',
    img: 'zaakvoerder-toestel',
    alt: 'Saskia naast een behandeltoestel in het instituut',
    from: 105,
    intro:
      'Leer jouw huid beter kennen. We combineren een huidanalyse met een aangepaste gelaatsverzorging en persoonlijk advies voor thuis. Ideaal als eerste behandeling.',
    prices: [{ rows: [discovery] }],
  },
  {
    slug: 'huidanalyse',
    name: 'Huidanalyse & advies',
    sub: 'je huid beter leren kennen',
    img: 'huidanalyse-scan',
    alt: 'Een gezicht in beeld op de huidscanner',
    from: 60,
    intro:
      'Met de huidscanner bekijk ik je huid tot in de diepere lagen. Daarna bespreken we samen wat ze nodig heeft, in het instituut en thuis.',
    tip: 'Nieuw bij Soleil? Kies dan de Skin Discovery: analyse, verzorging en advies in één afspraak.',
    prices: [
      {
        rows: [
          ['Advies moment', '30 min', 25, 'intakegesprek zonder analyse, gratis bij aankoop van 3 producten'],
          ['Skin analyse + advies', '60 min', 60],
          discovery,
        ],
      },
    ],
  },
  {
    slug: 'skin-relax',
    name: 'Skin Relax',
    sub: 'ontspannen & revitaliseren',
    img: 'gelaatsverzorging',
    alt: 'Gezicht wordt gereinigd tijdens een gelaatsverzorging',
    from: 70,
    intro:
      'Een verzorgende gelaatsbehandeling waarbij ontspanning centraal staat. Een rustmoment voor jezelf, met aandacht voor een frisse, verzorgde huid.',
    tip: 'Weet je niet welke verzorging bij jou past? Kies dan eerst de Skin Discovery, dan overloop ik wat het best bij jou past.',
    prices: [
      {
        title: 'Skin Relax',
        rows: [
          ['Skin Relax 1u', '60 min', 70],
          ['Skin Relax 1u30', '90 min', 90],
          discovery,
        ],
      },
      {
        title: "Extra's",
        rows: [
          ['Extra oogcontour', '20 min', 50],
          ['Extra epilatie gelaat, per zone', '10 min', 10],
          ['Extra milia verwijderen', '10 min', 10],
        ],
      },
    ],
  },
  {
    slug: 'skin-expert',
    name: 'Skin Expert',
    sub: 'herstellen & vernieuwen',
    img: 'led-lichttherapie',
    alt: 'Behandeltafel onder de LED-lamp in het instituut',
    from: 120,
    intro:
      'Een doelgerichte gelaatsbehandeling met intensieve producten en specifieke technieken of toestellen. Afgestemd op jouw huid, met aandacht voor herstel en huidverbetering.',
    tip: 'Werk je voor het eerst aan huidverbetering? Begin dan met een Skin Discovery.',
    prices: [],
    parts: [
      {
        id: 'peel',
        name: 'Peel',
        img: 'peeling',
        alt: 'Een peeling wordt met een penseel aangebracht',
        text: 'Een peeling maakt de bovenste laag dode huidcellen los, zodat je huid weer zacht en glad aanvoelt en haar frisheid terugkrijgt. Altijd aangepast aan je huidtype. In kuurvorm verfijnt ze de huidstructuur en vermindert ze lijntjes, pigmentvlekken, littekens en acne. Een ideaal begin voor anti-aging en resultaatgerichte behandelingen.',
        prices: [
          {
            rows: [
              ['Skin Expert Peel', '60 min', 125, 'masker + LED'],
              ['Skin Expert Peel Deluxe', '90 min', 150, 'met relaxmassage'],
            ],
          },
        ],
      },
      {
        id: 'needling',
        name: 'Needling',
        img: 'microneedling',
        alt: 'Microneedling-pen tijdens een behandeling',
        text: 'Met fijne naaldjes stimuleer ik het natuurlijke huidherstel en de aanmaak van collageen. Dit helpt fijne lijntjes en acnelittekens te verzachten en de huidstructuur te verfijnen.',
        prices: [
          {
            rows: [
              ['Skin Expert Needling', '75 min', 125, 'needling + masker + LED-lichttherapie'],
              ['Skin Expert Needling + peel', '90 min', 185],
            ],
          },
        ],
      },
      {
        id: 'neo-lift',
        name: 'Neo-Lift',
        img: 'neo-lift',
        alt: 'Neo-Lift behandeling van het gelaat',
        text: 'Radiofrequentie en elektrostimulatie samen: voor meer collageen en elastine en stevigere contouren, zonder naalden. Altijd in kuurvorm.',
        prices: [
          {
            rows: [
              ['Neo-Lift per zone', '45 min', 120],
              ['Neo-Lift gelaat + hals', '90 min', 180],
              ['Neo-Lift + peel', '90 min', 185],
            ],
          },
        ],
      },
    ],
  },
];

/* ---------- Ontspanning: one page each, same template ---------- */
export type Arrangement = { name: string; duration: string; solo: number; duo?: number; items: string[] };
export const arrangements: Arrangement[] = [
  { name: 'Mini', duration: '1u15', solo: 100, items: ['Skin Relax basisverzorging', 'Epilatie wenkbrauwen', 'Korte rugmassage'] },
  { name: 'Feeling', duration: '1u30', solo: 115, duo: 220, items: ['Relaxerende rugmassage', 'Warme rugpakking', 'Mini gelaatsverzorging', 'Epilatie wenkbrauwen'] },
  { name: 'Soleil', duration: '2u', solo: 165, items: ['Relaxerende rugmassage', 'Skin Relax standaardverzorging', 'Epilatie wenkbrauwen', 'Manicure met hydratatie'] },
  { name: 'Relax', duration: '2u tot 2u30', solo: 150, duo: 290, items: ['Lichaamspeeling', 'Warme lichaamspakking + douche', 'Mini gelaatsverzorging'] },
  { name: 'Anti-stress', duration: '2u30', solo: 200, items: ['Skin Relax standaardverzorging', 'Epilatie wenkbrauwen', 'Relaxerende rugmassage', 'Warme rugpakking', 'Manicure met hydratatie', 'Korte voetmassage'] },
];
const arrangementRows: Row[] = arrangements.flatMap((a) => {
  const rows: Row[] = [[a.name, a.duration, a.solo, a.items.join(', ')]];
  if (a.duo) rows.push([`${a.name} duo`, a.duration, a.duo, 'met twee in de duo-cabine']);
  return rows;
});

export const laser = {
  name: 'Laser ontharing',
  text: 'Definitieve ontharing met de diodelaser, in samenwerking met Haarlaser Team. Een erkende laserspecialist komt op vaste dagen naar het instituut. De test- en uitlegsessie is gratis.',
  url: 'https://www.haarlaser.team',
  label: 'Prijzen op haarlaser.team',
};

export const relax: Treatment[] = [
  {
    slug: 'arrangementen',
    name: 'Arrangementen',
    sub: 'solo of met twee',
    img: 'duo-cabine',
    alt: 'Twee personen krijgen tegelijk een gezichtsmassage in de duo-cabine',
    from: 100,
    intro: 'Van kop tot teen verzorgd worden, alleen of met twee in de duo-cabine. Daarna geniet je na in de relaxruimte.',
    prices: [{ rows: arrangementRows }],
  },
  {
    slug: 'lichaam',
    name: 'Lichaamsbehandelingen',
    sub: 'massage, peeling & pakking',
    img: 'massage-lichaam',
    alt: 'Rugmassage',
    from: 35,
    intro: 'Laat de spanning uit je lichaam wegvloeien met een massage, een peeling of een warme pakking.',
    prices: [
      {
        rows: [
          ['Massage', '25 min', 35],
          ['Lichaamspeeling met douche', '30 min', 40],
          ['Lichaamspakking + douche', '40 min', 40],
          ['Lichaamspeeling + pakking', '60 min', 80],
        ],
      },
    ],
  },
  {
    slug: 'handen-voeten',
    name: 'Handen & voeten',
    sub: 'manicure, gellak & pedicure',
    img: 'handen-voeten',
    alt: 'Verzorging van de handen',
    from: 25,
    intro: 'Verzorgde handen en voeten, los of in combinatie met een Skin Relax.',
    note: 'Een pedicure bied ik nooit apart aan. Kom je voor een Skin Relax, dan kan je een pedicure bijboeken en voorzie ik graag wat meer tijd. Boeken kan via de combo-verzorgingen.',
    prices: [
      {
        title: 'Handen & voeten',
        rows: [
          ['Manicure / lakken', '30 min', '€25 / €35'],
          ['Gellak verwijderen + verzorging', '20 min', 25],
          ['Gellak en pedicure', '60 min', 65],
          ['Kleine pedicure', '', 30],
          ['Grote pedicure', '', 45],
        ],
      },
      {
        title: 'Combo met Skin Relax',
        rows: [
          ['Skin Relax basis + manicure', '', 90],
          ['Skin Relax basis + pedicure', '', 95],
          ['Skin Relax standaard + manicure', '', 115],
          ['Skin Relax standaard + pedicure', '', 120],
          ['Skin Relax standaard + manicure + pedicure', '', 145],
        ],
      },
    ],
  },
  {
    slug: 'epilaties',
    name: 'Epilaties',
    sub: 'ontharing met hars',
    img: 'ontharing',
    alt: 'Ontharing met hars',
    from: 15,
    intro: 'Ontharing met hars, voor gelaat en lichaam. Definitief ontharen kan met de laser.',
    prices: [
      {
        rows: [
          ['Onderbenen', '30 min', 25],
          ['Onderbenen + achterzijde bil', '30 min', 38],
          ['Volledige benen zonder bikini', '60 min', 48],
          ['Bikini sliprand', '15 min', 15],
          ['Bikini brazilian', '30 min', 40],
          ['Oksels', '10 min', 15],
          ['Wenkbrauwen', '15 min', 15],
          ['Bovenlip, kin of wang, per zone', '10 min', 15],
          ['Volledig gelaat', '25 min', 35],
        ],
      },
    ],
  },
  {
    slug: 'make-up',
    name: 'Make-up',
    sub: 'minerale make-up',
    img: 'make-up',
    alt: 'Make-up wordt aangebracht met een kwast',
    from: 20,
    intro: 'Minerale make-up van Jane Iredale. Leer ermee werken, altijd individueel.',
    prices: [
      {
        rows: [
          ['Make-up foundation test', '20 min', 'gratis'],
          ['Make-up + serum', '30 min', 35],
          ['Make-up cursus, 1 persoon', '60 min', 60],
          ['Verven wimpers', '15 min', 20],
          ['Verven wenkbrauwen + epilatie', '20 min', 25],
        ],
      },
    ],
  },
  {
    slug: 'laser',
    name: laser.name,
    sub: 'definitief ontharen',
    img: 'ontharing',
    alt: 'Ontharing',
    from: 0,
    intro: laser.text,
    prices: [],
    link: { href: laser.url, label: laser.label },
  },
];

skin.forEach((t) => (t.group = 'Huidverbetering'));
relax.forEach((t) => (t.group = 'Ontspanning'));
/* Every treatment, in menu order. One page each at /behandelingen/<slug>/. */
export const treatments: Treatment[] = [...skin, ...relax];
export const href = (t: Treatment) => `/behandelingen/${t.slug}/`;
export const groups = [
  { title: 'Huidverbetering' as Group, items: skin },
  { title: 'Ontspanning' as Group, items: relax },
];

export const brands = [
  { name: 'Environ', img: 'producten-environ', line: 'Huidverzorging op basis van vitamine A, met jarenlang onderzoek achter elk product.' },
  { name: 'ISOV', img: '', line: 'Koreaanse huidverzorging die wetenschap en actieve ingrediënten combineert voor doelgerichte huidverbetering.' },
  { name: 'Exuviance', img: 'producten-exuviance', line: 'Zachte, effectieve zuren voor een gladdere, egalere huid.' },
  { name: 'Jane Iredale', img: 'producten-jane-iredale', line: 'Minerale make-up die je huid verzorgt terwijl je ze draagt.' },
];

/* Footer list, in the client's own wording and order */
export const footerTreatments = [
  { href: '/behandelingen/skin-relax/', label: 'Skin Relax Facials' },
  { href: '/behandelingen/skin-expert/', label: 'Skin Expert Facials' },
  { href: '/behandelingen/epilaties/', label: 'Epilaties' },
  { href: '/behandelingen/lichaam/', label: 'Lichaamsbehandelingen' },
  { href: '/behandelingen/arrangementen/', label: 'Arrangementen' },
  { href: '/behandelingen/laser/', label: 'Definitieve ontharing met laser' },
];
