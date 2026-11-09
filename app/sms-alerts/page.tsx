import type { Metadata } from 'next'
import { LegalList, LegalPage, LegalSection } from '../components/LegalPage'
import { sms } from '../data/sms'
import SmsOptInForm from './SmsOptInForm'

export const metadata: Metadata = {
  title: `SMS Alerts | ${sms.brand}`,
  description: `Sign up for ${sms.programName}: automated text notifications from ${sms.brand}'s software and automations.`,
}

export default function SmsAlertsPage() {
  return (
    <LegalPage
      title="SMS"
      highlight="Alerts"
      intro={`Sign up for ${sms.programName} to get automated text notifications from ${sms.brand}'s software tools and automations.`}
    >
      <div className="glass-effect rounded-2xl p-6 sm:p-8">
        <SmsOptInForm />
      </div>

      <LegalSection title="What to expect">
        <LegalList
          items={[
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
