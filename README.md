<div align="center">

# Startup Doc Generator

### 17 Founder-Essential Legal Documents, Generated Free In The Browser

Startup Doc Generator (shipped under the product name "FounderDocs AI") is a template-first document studio covering 17 startup document types — founder agreement, incorporation packet, co-founder exit clause, shareholders agreement, cap table, ESOP agreement, NDA, IP assignment, trademark documents, employee contracts, offer letters, HR policies, terms of service, privacy policy, legal compliance docs, and a financial model. A guided form fills each template's clauses from user input, flags missing fields for review, and renders the result to a print-ready PDF via the browser's native print dialog. It carries an explicit disclaimer: template guidance only, not legal advice.

<p>
  <a href="https://startup-doc-generator.vercel.app"><img alt="Live Demo" src="https://img.shields.io/badge/Live-Demo-1D4ED8?style=for-the-badge&logo=vercel&logoColor=white"></a>
  <a href="https://github.com/jayblast-spec/startup-doc-generator"><img alt="GitHub Repo" src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white"></a>
</p>

<p>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white">
</p>

<p>
  <img alt="Animated Startup Doc Generator headline" src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=18&duration=2600&pause=650&color=1D4ED8&center=true&vCenter=true&width=760&lines=17+founder+documents%2C+template-first;Fill+the+blanks%2C+not+the+jargon;Download+a+review-ready+PDF;No+signup%2C+no+backend%2C+zero+retention">
</p>

</div>

## What It Does

- Generates 17 startup document templates: founder agreement, incorporation documents, co-founder exit clause, shareholders agreement, cap table, ESOP agreement, NDA, IP assignment agreement, trademark/IP documents, employee contracts, offer letters, HR policies, terms of service, privacy policy, legal compliance docs, and a financial model
- Guides the user through a form (`{{company}}`, `{{jurisdiction}}`, `{{equity}}`, `{{roles}}`, `{{terms}}`, etc.) and flags any required field left blank before generation
- Produces a print-ready PDF through the browser's native print dialog — no server round-trip
- States plainly that it is template guidance, not legal advice, and that documents are generated and discarded client-side

## How It Works

- Static site: `index.html` + `app.js` + `styles.css`, no framework, no build step, no `package.json`
- `app.js` holds a `catalog` array of the 17 document types, each with clause templates and placeholder tokens; the sidebar (`#docList`) renders one entry per document type
- The "Download PDF" button calls `window.print()` against a print-formatted view of the filled template — no PDF library, no server-side rendering
- Entirely client-side: no database, no auth, no API routes

## Live

https://startup-doc-generator.vercel.app

## Tech Stack

| Layer | Technology |
|---|---|
| Language | JavaScript (vanilla, ES6+) |
| Markup / Styling | HTML5 / CSS3 |
| Output | Browser-native `window.print()` |
| Deployment | Vercel (static) |

<br>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&height=70&color=0:1D4ED8,55:0B1E3D,100:020617&text=ArkNet%20Digital%20%7C%20Startup%20Doc%20Generator&fontColor=FAFAFA&fontSize=18&fontAlign=50&animation=fadeIn">
</p>

<p align="center">
Built by <a href="https://arknet.digital">ArkNet Digital</a> · <a href="mailto:michael@arknet.digital">michael@arknet.digital</a>
</p>
