import { sms } from '../data/sms'

export default function Contact() {
  const subject = encodeURIComponent('New project inquiry')

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative">
      <div className="section-padding">
        <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Let&apos;s Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8">
            Have a project in mind? Send a short note about what you&apos;re building and your timeline, and I&apos;ll
            get back to you within one business day.
          </p>
          <a
            href={`mailto:${sms.supportEmail}?subject=${subject}`}
            className="inline-block px-8 py-4 bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end rounded-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
          >
            Email {sms.supportEmail}
          </a>
          <p className="mt-6 text-sm text-gray-500">Remote · Available for new projects</p>
        </div>
      </div>
    </section>
  )
}
