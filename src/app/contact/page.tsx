
export const metadata = {
  title: 'Contact Us | NorthStar Academy',
  description: 'Get in touch with NorthStar Academy. Request a callback or email us for admissions and support.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-6xl px-4 py-10">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Contact Us</h1>
          <p className="mt-3 text-slate-600">We’re here to help with admissions, programs, and counseling.</p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Call */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Call</h2>
            <p className="mt-2 text-sm text-slate-600">Talk to our counselors for quick guidance.</p>
            <div className="mt-4">
              <a href="tel:+918147470707" className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                +91 81474 70707
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Email</h2>
            <p className="mt-2 text-sm text-slate-600">Prefer writing to us? We respond within one business day.</p>
            <div className="mt-4">
              <a href="mailto:contact@northstaracad.com" className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                contact@northstaracad.com
              </a>

            </div>
          </div>

          {/* Visit */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Visit</h2>
            <p className="mt-2 text-sm text-slate-600">Meet us at our Bengaluru HQ. Please schedule an appointment.</p>
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-sm text-slate-700">8, Hosur Main Road, DRC Post, Chikku Lakshmaiah Layout, Koramangala, Bengaluru, Karnataka 560030</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=12.935663465664156%2C77.6059233755867"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

      

        <div className="mt-10 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <h2 className="px-2 text-lg font-semibold text-slate-900">Location</h2>
          <div className="mt-4">
            <iframe
              title="NorthStar Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5648884558677!2d77.6059233755867!3d12.935663465664156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14556fbcb507%3A0x803ec7e35da1e9d!2sNorthStar%20Academy!5e0!3m2!1sen!2sin!4v1762512880284!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-[360px] sm:h-[450px] rounded-xl"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}