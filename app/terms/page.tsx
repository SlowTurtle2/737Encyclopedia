export const metadata = {
  title: 'Terms & Conditions | 737Encyclopedia',
  description: 'Terms governing access to and use of 737Encyclopedia.',
};

const updated = '9 September 2026';

export default function TermsPage() {
  return <main id="main" className="wrap legal-page">
    <header className="legal-head">
      <p className="eyebrow">LEGAL</p>
      <h1>Terms &amp; Conditions</h1>
      <p>Last updated: {updated}</p>
    </header>

    <section>
      <h2>1. Acceptance</h2>
      <p>By accessing 737Encyclopedia, creating an account or purchasing access, you agree to these Terms. If you do not agree, do not use the service.</p>
    </section>

    <section>
      <h2>2. Training use only</h2>
      <p>737Encyclopedia is an independent educational resource for study and simulation. It is not approved operational documentation, an aircraft manual, an operator procedure, flight instruction or professional advice. Content may be incomplete, simplified, outdated or contain errors. Never use it to operate, maintain or dispatch an aircraft, or as a substitute for current approved manuals, training, regulations and operator procedures.</p>
    </section>

    <section>
      <h2>3. No guarantee of results</h2>
      <p>We do not guarantee the accuracy, completeness or continued availability of any content, or success in an examination, assessment, type rating, recruitment process or flight operation. You remain solely responsible for checking information against authoritative sources and for decisions made using the service.</p>
    </section>

    <section>
      <h2>4. Accounts and access</h2>
      <p>You must provide accurate information, keep your credentials secure and promptly report suspected misuse. Access is personal, non-exclusive, non-transferable and may not be shared, resold or made available to others. We may suspend or terminate access for fraud, abuse, unlawful activity, security risks or a material breach of these Terms.</p>
    </section>

    <section>
      <h2>5. Paid access</h2>
      <p>Prices, included resources and payment terms are shown before purchase. Full Access is a licence to use the digital material made available through your account; ownership of the content is not transferred. Features may evolve as the service develops. Payments are handled by an external payment provider. Statutory consumer rights, including any applicable conformity, refund or withdrawal rights, remain unaffected. Any request to begin immediate delivery of digital content and any related waiver of a withdrawal right will apply only when expressly obtained during checkout as required by law.</p>
    </section>

    <section>
      <h2>6. Intellectual property</h2>
      <p>The site, its original text, structure, graphics, quizzes and other original material are protected by intellectual property law. You may use them only for your personal study. Copying, scraping, republishing, selling, distributing, modifying, extracting a database, bypassing access controls or using the content to train a commercial model is prohibited without prior written permission. Aircraft names, marks and third-party material remain the property of their respective owners. No affiliation with or endorsement by Boeing or any airline is claimed.</p>
    </section>

    <section>
      <h2>7. Availability and changes</h2>
      <p>We may correct, update, replace or remove content and features, and interrupt the service for maintenance, security or technical reasons. We may update these Terms prospectively by publishing a revised version and date. Material changes affecting paid access will be communicated where required by law.</p>
    </section>

    <section>
      <h2>8. Liability</h2>
      <p>To the fullest extent permitted by applicable law, the service is provided “as is” and “as available”. We are not liable for indirect or consequential loss, loss of opportunity, data, revenue or anticipated savings arising from use of or inability to use the service. Where liability cannot legally be excluded, it is limited only to the extent permitted by mandatory law. Nothing in these Terms excludes liability that cannot lawfully be excluded or limits mandatory consumer rights.</p>
    </section>

    <section>
      <h2>9. Prohibited use</h2>
      <p>You may not misuse the service, interfere with its security or operation, attempt unauthorised access, introduce malicious code, infringe rights, impersonate another person, or use the service for unlawful, unsafe or operational aviation purposes.</p>
    </section>

    <section>
      <h2>10. General</h2>
      <p>If one provision is unenforceable, the remaining provisions continue to apply. Failure to enforce a provision is not a waiver. Applicable mandatory law and any court rights available to consumers remain unaffected.</p>
    </section>
  </main>;
}
