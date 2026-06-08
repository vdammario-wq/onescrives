# OneScrIVES & ScrIVES

Een geïntegreerde tool voor docenten van VIVES om kant-en-klare AI-prompts te genereren voor lesmateriaal. De applicatie bundelt twee interfaces in één bestand:

- **OneScrIVES** — de algemene promptgenerator voor lesmateriaal in elk vakgebied (lesvoorbereiding, theorie en oefeningen, toetsing en evaluatie, groepswerk, zelfstudie, praktijkopdrachten).
- **ScrIVES** — de taalvak-specifieke interface met opties voor lesvoorbereiding, theorie en oefeningen, vaardigheden en groepswerk.

## Hoe het werkt

Bij het eerste gebruik maakt de docent een profiel aan met een of meer groepen. Per groep kan worden aangevinkt of het om een taalvak gaat.

- Klikt de docent op een **gewone groep**, dan verschijnen de OneScrIVES-categorieën.
- Klikt de docent op een **taalvakgroep** (herkenbaar aan het rode "Taalvak"-label), dan opent rechtstreeks de volledige ScrIVES-interface.

Er is ook een optie "Doorgaan zonder groep". Vanuit elke keuze kan de docent via "Andere groep kiezen" terugkeren naar de groepsselectie.

## Gebruik

Het is een enkele HTML-pagina zonder externe afhankelijkheden of buildstap. Open `index.html` in een browser, of host het bestand via GitHub Pages.

Het docentenprofiel wordt lokaal in de browser opgeslagen (localStorage); er worden geen gegevens naar een server gestuurd.

De applicatie is ook installeerbaar als progressive web app (PWA): wie de gehoste versie opent, kan ze toevoegen aan het beginscherm en daarna ook offline gebruiken.

## Bestanden

- `index.html` — de volledige applicatie (markup, stijl en logica in één bestand).
- `manifest.json` — PWA-manifest met naam, kleuren en iconen.
- `sw.js` — service worker voor offline gebruik en caching.
- `icon-192.png`, `icon-512.png` — app-iconen.
- `README.md`, `LICENSE.md`, `.gitignore`.

## Structuur

De applicatie zelf bestaat uit één bestand, `index.html`, met daarin:

- de markup voor de profielwizard, de homepage met groepsselectie, en de OneScrIVES- en ScrIVES-schermen;
- een script-blok met de OneScrIVES-logica;
- een apart script-blok met de ScrIVES-logica, waarvan alle variabelen en functies een `scr`-prefix dragen om naamconflicten te vermijden.

## Een update uitbrengen

Bij een nieuwe versie: verhoog het versienummer `CACHE_VERSIE` bovenaan in `sw.js` (bijvoorbeeld van `onescrives-v1` naar `onescrives-v2`). Daardoor ruimt de service worker de oude cache op en krijgen gebruikers automatisch de nieuwste versie.

## Ontwikkeling

Er is geen buildtool nodig. Voor wie wijzigingen aanbrengt in de JavaScript: de syntaxis van de script-blokken kan gecontroleerd worden met `node --check`.

## Licentie

Copyright © 2026 Mario Van Dam. Alle rechten voorbehouden.

Docenten van VIVES Hogeschool mogen deze software gebruiken voor onderwijsdoeleinden. Elk ander gebruik, kopiëren, wijzigen of verspreiden vereist voorafgaande schriftelijke toestemming. Zie [LICENSE.md](LICENSE.md) voor de volledige voorwaarden.
