import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalList, LegalPage, LegalSection, legalLink } from '../components/LegalPage'
import { sms } from '../data/sms'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Nova 3',
  description: `Terms of use for the Nova 3 website and the ${sms.programName} SMS program.`,
}

export default function TermsPage() {
  const email = (
    <a href={`mailto:${sms.supportEmail}`} className={legalLink}>
      {sms.supportEmail}
    </a>
  )

  return (
    <LegalPage
      title="Terms &"
      highlight="Conditions"
      updated={sms.lastUpdated}
      intro={`These terms cover your use of the ${sms.brand} website and the ${sms.programName} text message program. By using the site or opting in to texts, you agree to them.`}
    >
      <LegalSection title={`SMS Terms: ${sms.programName}`}>
        <LegalList
          items={[
            <>
              <strong className="text-white">Program name:</strong> {sms.programName}, operated by {sms.brand}.
            </>,
            <>
              <strong className="text-white">What you&apos;ll receive:</strong> automated alert and status notifications
              from {sms.brand}&apos;s software tools and automations, for example when a task or build finishes, a
              deployment succeeds or fails, or a system needs attention. We do not send marketing or promotional
              messages.
            </>,
            <>
              <strong className="text-white">How to opt in:</strong> enter your mobile number and check the consent box
              on our{' '}
              <Link href="/sms-alerts" className={legalLink}>
                SMS Alerts sign-up page
              </Link>
              . Consent is not a condition of any purchase.
            </>,
            <>
              <strong className="text-white">Message frequency:</strong> varies based on activity.
            </>,
            <>
              <strong className="text-white">Cost:</strong> message and data rates may apply. Check your mobile plan for
              details.
            </>,
            <>
              <strong className="text-white">Opt out:</strong> reply <strong className="text-white">STOP</strong> to any
              message at any time. You&apos;ll get one final message confirming you&apos;ve been unsubscribed, and then
              no more texts. To rejoin, sign up again on the SMS Alerts page.
            </>,
            <>
              <strong className="text-white">Help:</strong> reply <strong className="text-white">HELP</strong> to any
              message, or email {email}.
            </>,
            <>
              <strong className="text-white">Carriers:</strong> wireless carriers are not liable for delayed or
              undelivered messages.
            </>,
            <>
              <strong className="text-white">Privacy:</strong> see our{' '}
              <Link href="/privacy" className={legalLink}>
                Privacy Policy
              </Link>
              . No mobile information will be shared with third parties or affiliates for marketing or promotional
              purposes.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="Use of the website">
        <p>
          You may use this website for lawful purposes only. You agree not to interfere with the site&apos;s operation,
          attempt to gain unauthorized access to it, or use it to send spam or harmful content.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The content on this site, including text, graphics, logos, and code samples, belongs to {sms.brand} or its
          licensors and may not be copied or reused without permission, except where a project is publicly licensed.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer and limitation of liability">
        <p>
          The website and text alerts are provided &quot;as is&quot; without warranties of any kind. Alerts may be
          delayed or not delivered, and you should not rely on them for emergencies or time-critical decisions. To the
          fullest extent allowed by law, {sms.brand} is not liable for any indirect or consequential damages arising from
          your use of the site or the text message program.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          We may update these terms from time to time. Continued use of the site or the text program after changes means
          you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>Questions about these terms? Email {email}.</p>
      </LegalSection>
    </LegalPage>
  )
}
