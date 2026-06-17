const catalog = [
  ['founder', 'Founder Agreement', 'Equity, roles, vesting', 'Establish clear terms for ownership, responsibilities, decision-making, vesting, exits, and confidentiality.', ['Ownership and equity', '{{equity}}'], ['Roles and responsibilities', '{{roles}}'], ['Decision-making', 'Company decisions will be made according to the decision rule described in the special terms, including any matters requiring unanimous consent, majority approval, or CEO authority.'], ['Vesting and exit', 'Founder equity should be subject to a standard four-year vesting schedule with a one-year cliff unless the parties specify otherwise. Unvested shares should return to the company when a founder exits.'], ['Confidentiality', 'Each founder must protect company confidential information during and after involvement with the company.'], ['Special terms', '{{terms}}']],
  ['incorporation', 'Incorporation Documents', 'Delaware C-Corp proof', 'Prepare a checklist-style incorporation packet for proving the company legally exists.', ['Entity details', '{{company}} is expected to be incorporated or verified in {{jurisdiction}}.'], ['Certificate details', 'Record certificate of incorporation, corporate identity or file number, registered office, date of incorporation, and Secretary of State evidence.'], ['Share authorization', '{{equity}}'], ['Verification', 'Maintain state verification links, filing receipts, registered agent details, and corporate record book references.'], ['Special notes', '{{terms}}']],
  ['exit', 'Co-Founder Exit Clause', 'Founder departure rules', 'Define what happens before a co-founder leaves, becomes inactive, or is removed.', ['Exit triggers', 'Exit may be triggered by resignation, removal, extended inactivity, disability, death, or material breach.'], ['Unvested equity', 'All unvested equity should be forfeited immediately unless the parties agree otherwise.'], ['Vested shares and ROFR', '{{equity}}'], ['Continuing obligations', 'Confidentiality, IP protection, non-solicitation, and transition duties survive exit.'], ['Special terms', '{{terms}}']],
  ['shareholders', 'Shareholders Agreement', 'Ownership and governance', 'Set terms for shareholder rights, transfers, board composition, reserved matters, dividends, and disputes.', ['Shareholding schedule', '{{equity}}'], ['Transfer restrictions', 'No shareholder should transfer shares without following consent, ROFR, and permitted-transfer provisions.'], ['Board and approvals', '{{roles}}'], ['Reserved matters', 'Reserved matters may require special approval for fundraising, acquisitions, debt, hiring executives, dividends, or issuing new shares.'], ['Dispute resolution', '{{terms}}']],
  ['cap', 'Cap Table', 'Ownership and dilution', 'Create a structured ownership snapshot for founders, advisors, employees, angels, ESOP, and investors.', ['Capital summary', '{{equity}}'], ['Stakeholders', '{{partyOne}}, {{partyTwo}}, advisors, employees, investors, and option pool participants should be listed with ownership percentages.'], ['Vesting schedule', '{{roles}}'], ['Share classes', 'Track common stock, preferred stock, ESOP/options, SAFEs, notes, and fully diluted ownership.'], ['Update rules', '{{terms}}']],
  ['esop', 'ESOP Agreement', 'Employee option plan', 'Document option grants, exercise price, vesting, termination treatment, transfer limits, and expiry.', ['Grant details', '{{equity}}'], ['Vesting schedule', 'Options commonly vest over four years with a one-year cliff unless the plan states otherwise.'], ['Exercise and termination', '{{terms}}'], ['Transfer restrictions', 'Options are personal and may not be transferred, pledged, or assigned except as the plan permits.'], ['Employee obligations', '{{roles}}']],
  ['nda', 'NDA', 'Confidentiality', 'Protect confidential information before sharing roadmaps, financials, source code, or fundraising materials.', ['Parties', '{{partyOne}} and {{partyTwo}} may exchange confidential information relating to {{company}}.'], ['Confidential information', 'Confidential information includes product plans, technical data, software, designs, customer data, finances, pitch materials, and non-public strategy.'], ['Use restrictions', 'The receiving party may use confidential information only for the permitted purpose and may not disclose it without consent.'], ['Exclusions and return', 'Exclusions include public information, prior knowledge, independent development, and lawful third-party receipt. Materials must be returned or destroyed on request.'], ['Term', '{{terms}}']],
  ['ip', 'IP Assignment Agreement', 'Founder inventions', 'Assign software, inventions, designs, content, know-how, and related rights to the company.', ['Assignor and company', '{{partyOne}} assigns covered intellectual property to {{company}}.'], ['Covered IP', '{{roles}}'], ['Assignment', 'The assignor irrevocably transfers all worldwide rights, title, and interest in covered intellectual property to the company.'], ['Consideration and survival', '{{equity}}'], ['Carve-outs', '{{terms}}']],
  ['trademark', 'Trademark / IP Documents', 'Brand protection', 'Track trademark filings, registration evidence, classes, goods and services, and proof of use.', ['Mark owner', '{{company}} owns or intends to own the relevant brand assets.'], ['Trademark details', '{{roles}}'], ['Registration information', 'Track USPTO serial number, registration number, filing date, registration date, class, mark representation, and statement of use.'], ['Covered goods and services', '{{equity}}'], ['Special notes', '{{terms}}']],
  ['employee', 'Employee Contracts', 'Employment terms', 'Create clear employee terms covering role, compensation, probation, policies, confidentiality, and IP.', ['Appointment', '{{partyOne}} is appointed to the role or department described in this agreement.'], ['Role and reporting', '{{roles}}'], ['Compensation', '{{equity}}'], ['Policies and confidentiality', 'Employment is governed by company policies, confidentiality duties, data protection standards, and IP assignment obligations.'], ['Probation and termination', '{{terms}}']],
  ['offer', 'Offer Letters', 'Hiring offer', 'Extend a professional offer with designation, start date, compensation, reporting line, and acceptance language.', ['Offer', '{{company}} offers {{partyOne}} the position described in this letter.'], ['Joining details', '{{roles}}'], ['Compensation and benefits', '{{equity}}'], ['Conditions', 'The offer may be subject to background checks, proof of right to work, signed employment agreement, and company policies.'], ['Acceptance', '{{terms}}']],
  ['hr', 'HR Policies', 'People operations', 'Create baseline people policies for conduct, equal opportunity, harassment, attendance, privacy, and separation.', ['Equal opportunity', '{{company}} is committed to equal opportunity and non-discrimination.'], ['Code of conduct', '{{roles}}'], ['Harassment and safety', 'The company should maintain a zero-tolerance harassment policy and a clear reporting process.'], ['Attendance, leave, privacy, and IP', '{{equity}}'], ['Performance and separation', '{{terms}}']],
  ['terms', 'Terms of Service', 'User terms', 'Set expectations for service use, eligibility, payments, IP, liability, indemnity, and misuse.', ['Acceptance', 'Users accept these terms by accessing or using {{company}} services.'], ['Eligibility and user obligations', '{{roles}}'], ['Company IP and service rights', 'The company retains all rights in its platform, software, content, trademarks, and related materials.'], ['Payments and billing', '{{equity}}'], ['Liability and indemnity', '{{terms}}']],
  ['privacy', 'Privacy Policy', 'User data policy', 'Explain what data is collected, how it is used, user rights, cookies, security, and transfers.', ['Data collected', '{{roles}}'], ['Use of data', 'Data may be used to provide services, personalize experience, secure the platform, communicate with users, and comply with law.'], ['No sale of personal information', '{{company}} should state whether it sells, shares, or rents personal information.'], ['User rights and security', '{{equity}}'], ['Cookies, children, and transfers', '{{terms}}']],
  ['compliance', 'Legal Compliance Docs', 'Compliance calendar', 'Maintain business registration, tax, labor, privacy, IP, licenses, and regulatory filing evidence.', ['Registration and tax', '{{company}} should maintain registration, incorporation, tax, and local filing records.'], ['Labor and employment compliance', '{{roles}}'], ['Privacy and IP compliance', '{{equity}}'], ['Regulatory calendar', 'Create a quarterly compliance calendar with owners, deadlines, evidence, and status.'], ['Special compliance notes', '{{terms}}']],
  ['financial', 'Financial Model', 'Investor numbers', 'Build a five-year financial model with revenue, COGS, margins, cash flow, balance sheet, and ratios.', ['Revenue assumptions', '{{roles}}'], ['Income statement', 'Track revenue, COGS, gross profit, operating expenses, EBITDA, and net income by year.'], ['Cash flow and balance sheet', '{{equity}}'], ['Key ratios', 'Include gross margin, EBITDA margin, burn, runway, ROE, current ratio, and funding needs.'], ['Scenario notes', '{{terms}}']],
  ['term-sheet', 'Term Sheet', 'Funding terms', 'Summarize investment amount, valuation, instrument, investor rights, board rights, ROFR, drag-along, and closing conditions.', ['Investment terms', '{{equity}}'], ['Valuation and ownership', 'Record pre-money valuation, post-money valuation, fully diluted ownership, and option pool treatment.'], ['Investor rights', '{{roles}}'], ['Governance and transfers', 'Include board seat, information rights, ROFR, lock-in, drag-along, and protective provisions.'], ['Conditions and exclusivity', '{{terms}}']],
]

const templates = Object.fromEntries(catalog.map(([key, title, subtitle, intro, ...clauses]) => [key, { title, subtitle, intro, clauses }]))

const form = document.querySelector('#docForm')
const draft = document.querySelector('#draft')
const score = document.querySelector('#score')
const meterFill = document.querySelector('#meterFill')
const warnings = document.querySelector('#warnings')
const docTitle = document.querySelector('#docTitle')
const qualityLabel = document.querySelector('#qualityLabel')
const docList = document.querySelector('#docList')
const printBtn = document.querySelector('#printBtn')
const resetBtn = document.querySelector('#resetBtn')

let activeDoc = 'founder'

function renderDocList() {
  docList.innerHTML = catalog.map(([key, title, subtitle], index) => `
    <button class="doc-tab ${key === activeDoc ? 'active' : ''}" data-doc="${key}">
      <span>${String(index + 1).padStart(2, '0')} ${title}</span>
      <small>${subtitle}</small>
    </button>
  `).join('')

  docList.querySelectorAll('.doc-tab').forEach(tab => {
    tab.addEventListener('click', () => selectDoc(tab.dataset.doc))
  })
}

function value(name) {
  return form.elements[name]?.value.trim() || ''
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

function prettyDate(date) {
  if (!date) return '[Effective date]'
  const parsed = new Date(`${date}T00:00:00`)
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function collectData() {
  return {
    company: value('company') || '[Company name]',
    jurisdiction: value('jurisdiction') || '[Jurisdiction]',
    date: prettyDate(value('date')),
    partyOne: value('partyOne') || '[Party 1]',
    partyTwo: value('partyTwo') || '[Party 2]',
    roles: value('roles') || '[Describe roles, services, responsibilities, assumptions, or covered work]',
    equity: value('equity') || '[Describe equity, compensation, valuation, ownership, or financial terms]',
    terms: value('terms') || '[Add special terms, duration, carve-outs, approvals, dispute process, or termination language]',
  }
}

function interpolate(text, data) {
  return text.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] || '')
}

function generateDocument() {
  const data = collectData()
  const template = templates[activeDoc]
  const body = template.clauses
    .map(([title, content], index) => `${index + 1}. ${title}\n${interpolate(content, data)}`)
    .join('\n\n')

  return `${template.title.toUpperCase()}

Effective date: ${data.date}
Company: ${data.company}
Jurisdiction: ${data.jurisdiction}
Primary parties / owners: ${data.partyOne}; ${data.partyTwo}

IMPORTANT NOTICE
This document is generated from a general startup template for informational use only. It is not legal advice, does not create an attorney-client relationship, and must be reviewed by qualified counsel before signature, filing, investor diligence, employment use, or publication.

BACKGROUND
${template.intro}

${body}

Review checklist before use
- Confirm legal names, entity details, addresses, dates, and jurisdiction.
- Confirm ownership, compensation, valuation, employment, privacy, IP, and funding terms match the actual business decision.
- Confirm the document complies with the laws of ${data.jurisdiction}.
- Have qualified legal counsel review the final draft.

Signature / approval blocks

${data.partyOne}
Signature: ______________________________
Date: ___________________________________

${data.partyTwo}
Signature: ______________________________
Date: ___________________________________`
}

function audit() {
  const required = [
    ['company', 'Company name is missing.'],
    ['jurisdiction', 'Jurisdiction is missing.'],
    ['date', 'Effective date is missing.'],
    ['partyOne', 'First founder, party, employee, investor, or owner is missing.'],
    ['partyTwo', 'Second party, company representative, investor, or counterparty is missing.'],
    ['roles', 'Roles, obligations, assumptions, services, or covered work need detail.'],
    ['equity', 'Equity, compensation, valuation, ownership, or financial terms need detail.'],
    ['terms', 'Special terms, carve-outs, approvals, duration, or termination language need detail.'],
  ]

  const missing = required.filter(([name]) => !value(name)).map(([, message]) => message)
  const readiness = Math.round(((required.length - missing.length) / required.length) * 100)
  score.textContent = `${readiness}%`
  meterFill.style.width = `${readiness}%`

  qualityLabel.textContent = readiness >= 88 ? 'Ready for counsel review' : readiness >= 55 ? 'Needs details' : 'Incomplete'
  warnings.innerHTML = missing.length
    ? `<ul>${missing.map(item => `<li>${item}</li>`).join('')}</ul>`
    : '<p>Good intake coverage. Review the generated draft carefully, then export and send to counsel.</p>'
}

function selectDoc(key) {
  activeDoc = key
  renderDocList()
  docTitle.textContent = templates[key].title
  draft.value = generateDocument()
  audit()
}

form.addEventListener('submit', event => {
  event.preventDefault()
  draft.value = generateDocument()
  audit()
})

form.addEventListener('input', audit)

printBtn.addEventListener('click', () => {
  if (!draft.value.trim()) draft.value = generateDocument()
  window.print()
})

resetBtn.addEventListener('click', () => {
  form.reset()
  form.elements.date.value = today()
  draft.value = ''
  audit()
})

form.elements.date.value = today()
renderDocList()
draft.value = generateDocument()
audit()
