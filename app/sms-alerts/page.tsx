import type { Metadata } from 'next'
import { LegalList, LegalPage, LegalSection } from '../components/LegalPage'
import { sms } from '../data/sms'
import SmsOptInForm from './SmsOptInForm'

export const metadata: Metadata = {
  title: `Stay in Touch | ${sms.brand}`,
  description: `Contact ${sms.brand} and, if you choose, sign up for optional ${sms.programName} text notifications.`,
}

export default function SmsAlertsPage() {
  return (
    <LegalPage
      title="Stay in"
      highlight="Touch"
      intro={`Send us your details to hear from ${sms.brand} by email. You can also choose to get ${sms.programName} text notifications. Texts are completely optional.`}
    >
      <div className="card rounded-3xl p-6 sm:p-8">
        <SmsOptInForm />
      </div>

      <LegalSection title={`About ${sms.programName} (optional)`}>
        <LegalList
          items={[
            'Text alerts are opt-in only. Leaving the box unchecked never affects your access to our services.',
            'Automated alerts when a task or build finishes, a deployment succeeds or fails, or a system needs attention.',
            'No marketing or promotional messages.',
            'Message frequency varies based on activity. Message and data rates may apply.',
            'Reply STOP at any time to unsubscribe, or HELP for help.',
          ]}
        />
      </LegalSection>
    </LegalPage>
  )
}
