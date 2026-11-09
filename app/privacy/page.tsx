import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalList, LegalPage, LegalSection, legalLink } from '../components/LegalPage'
import { sms } from '../data/sms'

export const metadata: Metadata = {
  title: 'Privacy Policy | Nova 3',
  description: 'How Nova 3 collects, uses, and protects your information, including mobile numbers used for SMS alerts.',
}

export default function PrivacyPage() {
  const email = (
    <a href={`mailto:${sms.supportEmail}`} className={legalLink}>
      {sms.supportEmail}
    </a>
  )

  return (
    <LegalPage
      title="Privacy"
      highlight="Policy"
      updated={sms.lastUpdated}
      intro={`This policy explains what information ${sms.brand} ("we", "us") collects through ${sms.siteUrl.replace('https://', '')} and our ${sms.programName} text message program, how we use it, and the choices you have.`}
    >
      <LegalSection title="Information we collect">
        <LegalList
          items={[
            'Contact details you submit through our contact form, such as your name, email address, company or project name, and message.',
            <>
              Your mobile phone number and a record of your consent (date, time, and the page where you opted in) when you
              sign up for {sms.programName} at{' '}
              <Link href="/sms-alerts" className={legalLink}>
                /sms-alerts
              </Link>
              .
            </>,
            'Records of text messages we send you and your replies, such as STOP or HELP, so we can honor your requests.',
            'Basic technical information your browser sends automatically, such as IP address, browser type, and pages visited.',
          ]}
        />
      </LegalSection>

      <LegalSection title="How we use your information">
        <LegalList
          items={[
            'To respond to inquiries and provide the services you request.',
            `To send the ${sms.programName} text messages you opted in to receive, and to process opt-out and help requests.`,
            'To operate, secure, and improve our website.',
            'To comply with legal obligations.',
          ]}
        />
      </LegalSection>

      <LegalSection title="SMS and mobile information">
        <p>
          <strong className="text-white">
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
          </strong>{' '}
          Text messaging originator opt-in data and consent will not be shared with any third parties, except with the
          service providers that deliver our messages (such as our SMS platform provider and wireless carriers), and only
          as needed to send the messages you requested.
        </p>
        <p>
          You can opt out of text messages at any time by replying <strong className="text-white">STOP</strong>. Reply{' '}
          <strong className="text-white">HELP</strong> for help. See our{' '}
          <Link href="/terms" className={legalLink}>
            SMS Terms
          </Link>{' '}
          for full program details.
        </p>
      </LegalSection>

      <LegalSection title="How we share information">
        <p>
          We do not sell or rent your personal information. We share it only with service providers who help us run our
          website and messaging (for example hosting, email, and SMS delivery providers), when required by law, or to
          protect our rights and the safety of others. These providers may use your information only to perform services
          for us.
        </p>
      </LegalSection>

      <LegalSection title="Data retention and security">
        <p>
          We keep your information only as long as needed for the purposes above or as required by law. If you opt out of
          text messages, we keep a record of your opt-out so we do not message you again. We use reasonable administrative
          and technical safeguards to protect your information, but no method of transmission or storage is completely
          secure.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <LegalList
          items={[
            'Reply STOP to any text message to stop receiving texts.',
            <>Email us at {email} to access, correct, or delete your personal information.</>,
          ]}
        />
      </LegalSection>

      <LegalSection title="Children's privacy">
        <p>
          Our website and text message program are not directed to children under 13, and we do not knowingly collect
          their personal information.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date above shows when it last changed.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>Questions about this policy? Email {email}.</p>
      </LegalSection>
    </LegalPage>
  )
}
