/*
  Instituut Soleil: single source for practical info, treatments and prices.
  Source: prijslijst 2026 (PDF on instituutsoleil.be), the Skin / Feel Good / Contact pages
  and the news post "Nieuwe openingsuren" (7 Sept 2026). Checked 2 Oct 2026.
*/

export const info = {
  name: 'Instituut Soleil',
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
  { day: 'Zaterdag', short: 'Za', d: 6, open: '09:00', close: '13:30', note: 'Namiddag op afspraak' },
  { day: 'Zondag', short: 'Zo', d: 0 },
];

/* [naam, duur, prijs]. prijs: number in euro, string for ranges or notes */
export type Row = [string, string, number | string];

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  img: string;
  alt: string;
  line: string;
  from: number;
  intro: string;
  forWho: string[];
  how: string;
  prices: { title?: string; rows: Row[]; note?: string }[];
};

export const skin: Treatment[] = [
  {
    slug: 'huidanalyse',
    name: 'Huidanalyse & Discovery',
    short: 'Huidanalyse',
    img: 'huidanalyse-scan',
    alt: 'Een gezicht in beeld op de huidscanner',
    line: 'Waar elke nieuwe klant begint.',
    from: 25,
    intro:
      'Welke behandelingen en producten passen bij jouw huid? Met de huidscanner bekijk ik je huid tot in de diepere lagen. Daarna bespreken we samen wat ze nodig heeft.',
    forWho: [
      'Je komt voor het eerst bij Soleil',
      'Je twijfelt welke producten bij je huid passen',
      'Je wilt weten wat er onder het oppervlak gebeurt',
    ],
    how: 'De scan toont poriën, pigment, rimpels, talg en vochtgehalte, maar ook zonschade die je met het blote oog nog niet ziet. Op basis daarvan krijg je uitleg, persoonlijk advies en een voorstel voor behandelingen en thuisverzorging.',
    prices: [
      {
        rows: [
          ['Skin consult', '30 min', 25],
          ['Skin analyse + advies', '60 min', 50],
          ['Discovery: kennismakingsverzorging + analyse + advies', '90 min', 100],
        ],
        note: 'Het skin consult is gratis bij aankoop van 3 producten.',
      },
    ],
  },
  {
    slug: 'gelaatsverzorging',
    name: 'Skin Relax gelaatsverzorging',
    short: 'Gelaatsverzorging',
    img: 'gelaatsverzorging',
    alt: 'Gezicht wordt gereinigd tijdens een gelaatsverzorging',
    line: 'Een diepe verzorging, op maat van je huid.',
    from: 65,
    intro:
      'Een verzorging met Environ, Exuviance en Isov, afgestemd op wat je huid op dat moment nodig heeft. Je huid krijgt aandacht, jij komt even helemaal tot rust.',
    forWho: ['Je wilt je huid gezond houden', 'Je huid voelt dof of droog', 'Je zoekt een moment van rust'],
    how: 'Reiniging, exfoliatie, massage en een masker op maat. Uit te breiden met een oogcontourbehandeling of extra epilatie.',
    prices: [
      {
        title: 'Skin Relax',
        rows: [
          ['Skin Relax 1u', '50 min', 65],
          ['Skin Relax 1u30', '75 min', 90],
          ['Discovery behandeling', '90 min', 100],
        ],
      },
      {
        title: "Gelaat extra's",
        rows: [
          ['Extra oogcontour', '20 min', 50],
          ['Extra epilatie gelaat, per zone', '', 10],
          ['Extra milia verwijderen', '', 5],
        ],
      },
    ],
  },
  {
    slug: 'environ-df',
    name: 'Environ DF',
    short: 'Environ DF',
    img: 'producten-environ',
    alt: 'Producten van Environ',
    line: 'Vitamines die tot 300% beter worden opgenomen.',
    from: 65,
    intro:
      'Met de DF-toestellen van Environ dringen vitamines en actieve ingrediënten dieper door in je huid, tot 300% beter dan wanneer je ze enkel aanbrengt.',
    forWho: ['Een vermoeide, doffe huid', 'Huidveroudering en fijne lijntjes', 'Een huid die extra vitamines kan gebruiken'],
    how: 'Een intensieve behandeling voor het hele gelaat, of een korte focus-on voor één zone. Altijd met de juiste Environ-verzorging voor thuis, want daar zit het grootste deel van het resultaat.',
    prices: [
      {
        rows: [
          ['Environ DF Intensive', '90 min', 125],
          ['Environ DF Focus-on', '30 min', 65],
        ],
      },
    ],
  },
  {
    slug: 'peelings',
    name: 'Peelings',
    short: 'Peelings',
    img: 'peeling',
    alt: 'Een peeling wordt met een penseel aangebracht',
    line: 'Een gladdere, helderdere huid, stap voor stap.',
    from: 95,
    intro:
      'Een peeling exfolieert de huid gecontroleerd. Niet om zo hard mogelijk te vervellen, wel om je huid op een doordachte manier te stimuleren.',
    forWho: ['Een doffe of ruwe huid', 'Pigmentvlekjes na de zomer', 'Onzuiverheden en grove poriën'],
    how: 'Ik werk met professionele peelings van Environ en Exuviance en pas de sterkte altijd aan je huid aan. Voor echte huidverbetering stel ik meestal een kleine kuur voor, want de huid heeft tijd nodig.',
    prices: [
      {
        rows: [
          ['Peel Express (kuur)', '45 min', 95],
          ['Peel therapie: masker + LED', '60 min', 120],
          ['Peel Deluxe: met massage', '90 min', 145],
        ],
      },
    ],
  },
  {
    slug: 'microneedling',
    name: 'Microneedling',
    short: 'Microneedling',
    img: 'microneedling',
    alt: 'Microneedling-pen tijdens een behandeling',
    line: 'Je huid zelf aan het werk zetten.',
    from: 95,
    intro:
      'Door met ultrafijne naaldjes microscopisch kleine kanaaltjes in de huid te maken, wordt het natuurlijke herstelproces van de huid geactiveerd. Zo maakt je huid zelf nieuw collageen aan.',
    forWho: ['Fijne lijntjes en huidveroudering', 'Een ongelijke huidstructuur', 'Pigmentatie en een doffe teint'],
    how: 'We starten altijd met een skin consult. Samen stellen we een traject op, met voorbereidende producten voor thuis. 75% van het resultaat komt van wat je thuis doet.',
    prices: [
      {
        rows: [
          ['Microneedling', '45 min', 95],
          ['Microneedling + masker + LED', '60 min', 125],
          ['Microneedling combo', '60 min', 165],
        ],
      },
    ],
  },
  {
    slug: 'neo-lift',
    name: 'Neo-Lift',
    short: 'Neo-Lift',
    img: 'neo-lift',
    alt: 'Neo-Lift behandeling van het gelaat',
    line: 'Stevigheid en volume, zonder naalden.',
    from: 120,
    intro:
      'Neo-Lift combineert twee stromen: radiofrequentie en elektrostimulatie. Zo werk je aan de aanmaak van collageen en elastine én aan de versteviging van de dieperliggende spieren.',
    forWho: ['Huidverslapping en volumeverlies', 'Rimpels en fijne lijntjes', 'Verstevigen van gezicht- en halscontouren'],
    how: 'Korte, aangename en niet-invasieve behandelingen. Voor een mooi en realistisch resultaat werk ik altijd in kuurvorm, met de juiste verzorging voor thuis.',
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
];

export const skinExpert: Row = ['Huidverbetering op maat van je huid', '100 min', 'vanaf €125'];

export type Arrangement = { name: string; duration: string; solo: number; duo?: number; items: string[] };
export const arrangements: Arrangement[] = [
  { name: 'Mini', duration: '1u15', solo: 100, items: ['Skin Relax basisverzorging', 'Epilatie wenkbrauwen', 'Korte rugmassage'] },
  { name: 'Feeling', duration: '1u30', solo: 115, duo: 220, items: ['Relaxerende rugmassage', 'Warme rugpakking', 'Mini gelaatsverzorging', 'Epilatie wenkbrauwen'] },
  { name: 'Soleil', duration: '2u', solo: 165, items: ['Relaxerende rugmassage', 'Skin Relax standaardverzorging', 'Epilatie wenkbrauwen', 'Manicure met hydratatie'] },
  { name: 'Relax', duration: '2u tot 2u30', solo: 150, duo: 290, items: ['Lichaamspeeling', 'Warme lichaamspakking + douche', 'Mini gelaatsverzorging'] },
  { name: 'Anti-stress', duration: '2u30', solo: 200, items: ['Skin Relax standaardverzorging', 'Epilatie wenkbrauwen', 'Relaxerende rugmassage', 'Warme rugpakking', 'Manicure met hydratatie', 'Korte voetmassage'] },
];

export type ServiceGroup = { id: string; name: string; line: string; img: string; alt: string; lede: string; rows: Row[]; note?: string };
export const services: ServiceGroup[] = [
  {
    id: 'combo',
    name: 'Combo',
    line: 'Gelaatsverzorging met manicure of pedicure.',
    img: 'handen-voeten',
    alt: 'Verzorging van de handen',
    lede: 'Een gelaatsverzorging, gecombineerd met verzorgde handen of voeten.',
    rows: [
      ['Skin Relax basis + manicure', '', 90],
      ['Skin Relax basis + pedicure', '', 95],
      ['Skin Relax standaard + manicure', '', 115],
      ['Skin Relax standaard + pedicure', '', 120],
      ['Skin Relax standaard + manicure + pedicure', '', 145],
    ],
  },
  {
    id: 'lichaam',
    name: 'Lichaam',
    line: 'Massage, peeling en warme pakking.',
    img: 'massage-lichaam',
    alt: 'Rugmassage',
    lede: 'Laat de spanning uit je lichaam wegvloeien, of doezel weg onder een warme pakking.',
    rows: [
      ['Massage', '25 min', 35],
      ['Lichaamspeeling met douche', '30 min', 40],
      ['Lichaamspakking + douche', '40 min', 40],
      ['Lichaamspeeling + pakking', '60 min', 80],
    ],
  },
  {
    id: 'handen-voeten',
    name: 'Handen & voeten',
    line: 'Manicure, pedicure en gellak.',
    img: 'handen-voeten',
    alt: 'Verzorging van de handen',
    lede: 'Een pedicure kan enkel in combinatie met een gelaatsverzorging.',
    rows: [
      ['Manicure / lakken', '30 min', '€25 / €35'],
      ['Gellak verwijderen + verzorging', '20 min', 25],
      ['Gellak en pedicure', '60 min', 65],
      ['Kleine pedicure*', '', 30],
      ['Grote pedicure*', '', 45],
    ],
    note: '* Enkel in combinatie met een gelaatsverzorging.',
  },
  {
    id: 'ontharing',
    name: 'Ontharing',
    line: 'Met hars, of definitief met de diodelaser.',
    img: 'ontharing',
    alt: 'Ontharing met hars',
    lede: 'Ontharing met hars. Definitief ontharen kan met de diodelaser, via onze partner.',
    rows: [
      ['Onderbenen', '30 min', 25],
      ['Onderbenen + achterzijde bil', '30 min', 38],
      ['Volledige benen zonder bikini', '60 min', 48],
      ['Bikini sliprand', '15 min', 15],
      ['Bikini brazilian', '30 min', 40],
      ['Oksels', '10 min', 15],
      ['Wenkbrauwen', '15 min', 15],
      ['Bovenlip, kin of wang, per zone', '10 min', 12],
      ['Volledig gelaat', '25 min', 35],
    ],
  },
  {
    id: 'make-up',
    name: 'Make-up',
    line: 'Minerale make-up en verven.',
    img: 'make-up',
    alt: 'Make-up wordt aangebracht met een kwast',
    lede: 'Minerale make-up van Jane Iredale. Leer ermee werken, altijd individueel.',
    rows: [
      ['Make-up foundation test', '20 min', 'gratis'],
      ['Make-up + serum', '30 min', 30],
      ['Make-up cursus, 1 persoon', '60 min', 50],
      ['Verven wimpers', '15 min', 20],
      ['Verven wenkbrauwen + epilatie', '20 min', 25],
    ],
  },
];

export const laser = {
  text: 'Definitieve ontharing met de diodelaser, in samenwerking met Haarlaser Team. Een erkende laserspecialist komt op vaste dagen naar het instituut. De test- en uitlegsessie is gratis.',
  url: 'https://www.haarlaser.team',
};

export const brands = [
  { name: 'Environ', img: 'producten-environ', line: 'Huidverzorging op basis van vitamine A, met jarenlang onderzoek achter elk product.' },
  { name: 'Exuviance', img: 'producten-exuviance', line: 'Zachte, effectieve zuren voor een gladdere, egalere huid.' },
  { name: 'Jane Iredale', img: 'producten-jane-iredale', line: 'Minerale make-up die je huid verzorgt terwijl je ze draagt.' },
];

export const nav = [
  { href: '/behandelingen/', label: 'Behandelingen' },
  { href: '/verwennen/', label: 'Verwennen' },
  { href: '/tarieven/', label: 'Tarieven' },
  { href: '/over-soleil/', label: 'Over Soleil' },
  { href: '/journaal/', label: 'Journaal' },
  { href: '/contact/', label: 'Contact' },
];

export const euro = (v: number | string) => (typeof v === 'number' ? `€${v}` : v);

/* One entry per bookable offer, used by the treatment index and the concern picker. */
export type Offer = { id: string; name: string; line: string; img: string; alt: string; href: string; from: number };
const minPrice = (rows: Row[]) => Math.min(...rows.map((r) => (typeof r[2] === 'number' ? r[2] : Number(String(r[2]).match(/\d+/)?.[0] ?? 999))));
export const skinOffers: Offer[] = skin.map((s) => ({ id: s.slug, name: s.name, line: s.line, img: s.img, alt: s.alt, href: `/behandelingen/${s.slug}/`, from: s.from }));
export const pamperOffers: Offer[] = [
  { id: 'arrangementen', name: 'Arrangementen', line: 'Solo of met twee in de duo-cabine.', img: 'arrangementen', alt: 'Ontspannen tijdens een arrangement', href: '/verwennen/#arrangementen', from: Math.min(...arrangements.map((a) => a.solo)) },
  ...services.filter((s) => s.id !== 'combo').map((s) => ({ id: s.id, name: s.name, line: s.line, img: s.img, alt: s.alt, href: `/verwennen/#${s.id}`, from: minPrice(s.rows) })),
];
const offer = (id: string) => [...skinOffers, ...pamperOffers].find((o) => o.id === id)!;

/* "Wat wil je verbeteren?": concern → matching offers. Based on the "voor wie" lists above. */
export const concerns = [
  { id: 'doffe-huid', label: 'Een doffe huid', note: 'Een frisse, heldere teint begint bij exfoliëren en de juiste vitamines.', offers: ['peelings', 'environ-df', 'gelaatsverzorging'] },
  { id: 'lijntjes', label: 'Fijne lijntjes', note: 'Je huid zelf weer collageen laten aanmaken, stap voor stap.', offers: ['microneedling', 'neo-lift', 'environ-df'] },
  { id: 'pigment', label: 'Pigmentvlekken', note: 'Pigment vraagt een traject: behandelingen in het instituut én de juiste verzorging thuis.', offers: ['peelings', 'microneedling'] },
  { id: 'verslapping', label: 'Verslapping & volume', note: 'Stevigere contouren, zonder naalden.', offers: ['neo-lift', 'microneedling'] },
  { id: 'onzuiver', label: 'Onzuiverheden', note: 'Een rustigere huid met verfijnde poriën.', offers: ['peelings', 'gelaatsverzorging'] },
  { id: 'ontspannen', label: 'Even ontspannen', note: 'Gewoon even niets moeten. Alleen, of met twee in de duo-cabine.', offers: ['arrangementen', 'lichaam', 'gelaatsverzorging'] },
].map((c) => ({ ...c, offers: c.offers.map(offer) }));
