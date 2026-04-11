# CLAUDE.md — Buro Botanique

> Dit bestand stuurt Claude Code aan. Lees dit altijd eerst voordat je iets bouwt of wijzigt.

---

## 📌 Projectoverzicht

| Veld | Waarde |
|---|---|
| Klant | Claire Wesselings |
| Bedrijfsnaam | Buro Botanique |
| Doel van de site | Portfolio + leadgeneratie (tuinontwerp) |
| Doelgroep | Jonge mensen, 25–50, gezinnen |
| Uitstraling | Speels, Energiek, Menselijk, Creatief |
| Opgeleverd via | Vercel |
| Repo | [GitHub URL invullen] |
| Live URL | www.burobotanique.nl |
| Contactpersoon klant | Claire Wesselings — claire.wesselings@gmail.com |

---

## 📄 Pagina's

De site bestaat uit de volgende pagina's (copy is aangeleverd):

| Pagina | Inhoud |
|---|---|
| Home / Info | Introductie + drie diensten: tuinontwerp op maat, beplantingsplannen, lichtplannen |
| Diensten | Drie pakketten: Groen (upgrade), Groener (ontwerp), Groenst (totaalplan) |
| Portfolio | Projectenoverzicht met intro tekst |
| Contact | Contactformulier + telefoon + e-mail |

> ⚠️ Gebruik uitsluitend de aangeleverde copy. Geen placeholder tekst invullen.

---

## 🧱 Stack

- **Framework**: Vite + React (met `vite-react-ssg` voor SSG)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **CMS**: Geen (statische site)
- **Analytics**: Google Analytics GA4 (Measurement ID nog opvragen bij Claire)
- **Formulieren**: Netlify Forms of Formspree (contactpagina)

---

## 🎨 Design tokens

Gekozen concept: **La Fleur Verte stijl** — *"Luxe botanisch, editorial, magazine"*
Stijlomschrijving: gedurfd, ruimtelijk, grote typografie, gekleurde secties, full-bleed beelden.

```css
/* Kleuren per sectie */
--color-hero-bg: #3C4A2A;      /* Donker olijfgroen — hero/header */
--color-section-pink: #EDB8B8; /* Zacht roze — tweede sectie */
--color-section-green: #9AAD65;/* Geelgroen — portfolio sectie */
--color-ticker-bg: #F7D5D5;    /* Lichtroze — marquee ticker */
--color-text: #1E1208;         /* Donkerbruin — bodytekst */
--color-text-light: #FFFFFF;   /* Wit — tekst op donkere achtergronden */

/* Typografie */
--font-script: 'Pinyon Script', cursive;        /* Accent script — voor subtitels */
--font-display: 'Cormorant Garamond', serif;    /* Grote headings — bold, condensed */
--font-body: 'Jost', sans-serif;                /* Bodytekst — klein en rustig */
```

### Google Fonts import
```html
<link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Cormorant+Garamond:wght@700;900&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
```

### Visuele stijlrichtlijnen

- **Typografie**: Enorm grote headings in Cormorant Garamond bold — mogen buiten het scherm vallen. Script font (Pinyon Script) alleen voor kleine accentwoorden.
- **Layout**: Full-bleed foto's als achtergrond in de hero. Gekleurde blokken per sectie wisselen van kleur. Geen standaard grid — denk magazine editorial.
- **Beelden**: Groot, dominant, snijden in secties. Bloemen en tuinen losstaand op gekleurde achtergrond (geen rechthoekige kaders).
- **Ticker**: Horizontale scrollende tekstregel onderaan ("Ons werk ~ Ons werk ~") in lichtroze balk.
- **Navigatie**: Klein, kapitalen, rustig — de typografie is de ster, niet de nav.
- **Sfeer**: La Fleur Verte — luxe, botanisch, ruim, editorial.

### Moodboard referenties

De visuele referentie is een screenshot van La Fleur Verte. Stuur deze afbeelding 
altijd mee bij elke Claude Code sessie — het is de enige stijlreferentie voor dit project.

> ⚠️ Geen externe referentiewebsites gebruiken. Alles is gebaseerd op de meegestuurde screenshot.

---

## 📁 Projectstructuur

```
/
├── public/
│   ├── images/
│   │   ├── portfolio/        # Projectfoto's van Claire
│   │   └── hero/             # Hero-afbeeldingen per pagina
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/           # Navbar, Footer, Layout wrapper
│   │   ├── sections/         # Hero, About, Services, Portfolio, Contact
│   │   └── ui/               # Button, Card, Image, ContactForm
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Diensten.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── tailwind.config.js
├── vite.config.js
└── CLAUDE.md
```

---

## 🔤 SEO & metadata

| Pagina | Title | Meta description |
|---|---|---|
| Home | Buro Botanique — Tuinontwerp op maat | Tuinontwerp, beplantingsplannen en lichtplannen voor een tuin die lééft. |
| Diensten | Diensten — Buro Botanique | Kies het pakket dat bij jouw tuin past: Groen, Groener of Groenst. |
| Portfolio | Portfolio — Buro Botanique | Bekijk onze tuinprojecten en laat je inspireren. |
| Contact | Contact — Buro Botanique | Neem contact op voor een vrijblijvend kennismakingsgesprek van 15 minuten. |

---

## ✅ Conventies

### Algemeen
- Schrijf alle code in **Engels** (variabelen, functies, componenten)
- Klantgerichte tekst (copy) is in het **Nederlands**
- Gebruik functionele React componenten met hooks — geen class components
- Elke component in een eigen bestand
- Props altijd destructuren bovenaan de component

### Naamgeving
- Componenten: `PascalCase` (bijv. `HeroSection.jsx`)
- Functies/variabelen: `camelCase`
- CSS classes: Tailwind utility classes, geen custom CSS tenzij echt nodig

### Afbeeldingen
- `alt`-tekst is verplicht — beschrijf de tuin, niet "foto van tuin"
- Gebruik WebP formaat, max 200KB per afbeelding
- Lazy loading standaard aan

---

## 🚫 Wat Claude Code NIET mag doen

- **Nooit** het kleurenpalet of typografie wijzigen — Wildflower is vastgesteld
- **Nooit** Lorem ipsum gebruiken — de echte copy staat in dit bestand
- **Nooit** packages toevoegen zonder dit eerst te vermelden
- **Nooit** meerdere grote features tegelijk bouwen — werk stap voor stap
- **Nooit** de mapstructuur reorganiseren tenzij expliciet gevraagd
- **Nooit** een generieke/saaie layout maken — dit is een expressief, gedurfd design

---

## 🔄 Werkwijze per sessie

1. **Lees dit bestand** voordat je begint
2. **Bouw één ding tegelijk** — één component, één sectie, één fix
3. **Vertel wat je gaat doen** voordat je begint
4. **Vertel wat je hebt gewijzigd** nadat je klaar bent
5. **Vraag om bevestiging** bij twijfel over ontwerp- of structuurbeslissingen

---

## 🌐 Hosting & Domein

| Veld | Waarde |
|---|---|
| Hosting platform | Vercel |
| Account eigenaar | Claire Wesselings (klant) |
| Plaiwrks toegang via | Team member uitnodiging |
| Domeinnaam | www.burobotanique.nl |
| Domeinprovider | [nog opvragen bij Claire] |
| DNS type | CNAME |
| WWW-redirect | www → root (of andersom, afstemmen) |

### DNS-instellingen (invullen bij koppeling)

| Type | Naam | Waarde |
|---|---|---|
| A | @ | [Vercel IP — staat in Vercel dashboard] |
| CNAME | www | cname.vercel-dns.com |

> ⏱️ Reken op 0–48 uur propagatietijd. Niet omzetten zolang de site nog niet af is.

### ✅ Hosting & domein checklist

- [ ] Claire weet bij welke provider het domein staat
- [ ] Claire heeft inloggegevens domeinprovider
- [ ] Vercel account aangemaakt op naam van Claire
- [ ] Plaiwrks uitgenodigd als team member in Vercel
- [ ] DNS ingesteld (CNAME)
- [ ] WWW-redirect werkend
- [ ] HTTPS actief en SSL-certificaat geldig
- [ ] Geen oude site die nog op het domein staat

---

## 🌐 Omgevingsvariabelen

```
VITE_FORMSPREE_ID=         # Contactformulier endpoint
VITE_GA_MEASUREMENT_ID=    # Google Analytics GA4 — ID nog opvragen bij Claire (format: G-XXXXXXXXXX)
```

---

## 📦 Deployment

- **Branch**: `main` → automatisch deploy naar productie
- **Preview**: elke PR krijgt een preview URL — stuur deze naar Claire voor feedback
- **Commando's**:
  ```bash
  npm run dev       # lokaal ontwikkelen
  npm run build     # productie build
  npm run preview   # preview van build
  ```

---

## 📝 Notities & beslissingen

| Datum | Beslissing | Reden |
|---|---|---|
| 11-04-2026 | Concept Wildflower gekozen | 1e keuze uit huisstijlsessie met Claire |
| 11-04-2026 | Statische site, geen CMS | Eenvoudige site, Claire werkt niet zelf in de content |

---

*Gebouwd door Plaiwrks · From Lions · Amsterdam — Laatste update: 11 april 2026*
