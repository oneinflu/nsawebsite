import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | NorthStar Academy',
  description:
    'Read how NorthStar Academy collects, uses, and protects your data, including cookies, analytics, and contact details.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-3 text-slate-600">Last updated: November 19, 2025</p>

      <section className="mt-8 space-y-4 text-slate-700">
        <p>
          NorthStar Academy (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This Privacy Policy explains
          what data we collect, how we use it, and your choices.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Information We Collect</h2>
        <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700">
          <li>Contact details such as name, email, phone, and location.</li>
          <li>Course interests and form submissions including OTP verification status.</li>
          <li>UTM parameters and marketing attribution data.</li>
          <li>Usage data like pages visited, session referrer, and device/network details.</li>
          <li>Files you download (e.g., prospectus or study guides) and preferences.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">How We Use Your Information</h2>
        <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700">
          <li>Provide guidance on programs and process your inquiries.</li>
          <li>Send transactional messages (e.g., OTP, confirmations) and requested resources.</li>
          <li>Improve our website experience, content relevance, and performance.</li>
          <li>Measure marketing effectiveness and personalize communication.</li>
          <li>Comply with legal obligations and enforce our policies.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Cookies and Tracking</h2>
        <p className="mt-4 text-slate-700">
          We use cookies and similar technologies to remember preferences, understand usage, and
          improve performance. You can control cookies in your browser settings. Some features may
          not function without cookies.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Data Sharing</h2>
        <p className="mt-4 text-slate-700">
          We may share data with service providers for analytics, communication, hosting, or support
          purposes. These partners are bound by confidentiality and process data on our behalf.
          We do not sell personal data.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Data Retention</h2>
        <p className="mt-4 text-slate-700">
          We retain personal data for as long as necessary to provide services, comply with legal
          requirements, and resolve disputes. Retention periods may vary based on context and
          regulatory obligations.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Your Rights</h2>
        <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700">
          <li>Access, update, or correct your personal information.</li>
          <li>Request deletion where applicable by law.</li>
          <li>Opt out of marketing communications at any time.</li>
          <li>Withdraw consent where processing relies on consent.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-4 text-slate-700">
          For privacy questions or requests, contact us at <a href="mailto:contact@northstaracad.com" className="text-blue-600 hover:underline">contact@northstaracad.com</a>.
        </p>
      </section>

      <section className="mt-8">
        <p className="text-slate-500">
          We may update this policy periodically. Continued use of the site indicates acceptance of
          the latest version.
        </p>
      </section>
    </main>
  );
}