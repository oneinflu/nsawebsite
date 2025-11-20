import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | NorthStar Academy',
  description:
    'Read the terms and conditions governing use of NorthStar Academy website and services, including enrollments, payments, and acceptable use.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Terms & Conditions</h1>
      <p className="mt-3 text-slate-600">Last updated: November 19, 2025</p>

      <section className="mt-8 space-y-4 text-slate-700">
        <p>
          By accessing our website or using our services, you agree to these Terms & Conditions.
          If you do not agree, please discontinue use.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Services</h2>
        <p className="mt-4 text-slate-700">
          NorthStar Academy provides training, guidance, and resources for finance certifications.
          Features and content may change without prior notice.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Accounts and Enrollment</h2>
        <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700">
          <li>Provide accurate information during registration and communication.</li>
          <li>You are responsible for maintaining the confidentiality of any credentials.</li>
          <li>Enrollment, schedules, and access are subject to program availability and policies.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Payments and Refunds</h2>
        <p className="mt-4 text-slate-700">
          Fees are due as communicated during enrollment. Refunds, where applicable, follow our
          published refund policy. Contact our support team for assistance.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Intellectual Property</h2>
        <p className="mt-4 text-slate-700">
          All content, curriculum, and materials provided are owned or licensed by NorthStar
          Academy and are for personal, non-commercial use unless explicitly permitted.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Acceptable Use</h2>
        <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700">
          <li>Do not misuse our services or interfere with site functionality.</li>
          <li>Do not attempt to access restricted areas without authorization.</li>
          <li>Do not share, resell, or redistribute course materials without permission.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Disclaimers</h2>
        <p className="mt-4 text-slate-700">
          We strive for accuracy but do not guarantee outcomes such as exam results, placements,
          or third-party actions. Services are provided on an &quot;as is&quot; basis to the extent permitted
          by law.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Limitation of Liability</h2>
        <p className="mt-4 text-slate-700">
          To the maximum extent permitted by law, NorthStar Academy will not be liable for indirect
          or consequential damages arising from the use of our website or services.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Changes</h2>
        <p className="mt-4 text-slate-700">
          We may update these terms periodically. Material changes will be reflected on this page
          with the revised date.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-4 text-slate-700">
          For questions about these terms, contact us at <a href="mailto:contact@northstaracad.com" className="text-blue-600 hover:underline">contact@northstaracad.com</a>.
        </p>
      </section>
    </main>
  );
}