'use client'

import Link from 'next/link'
import { useState } from 'react'
import { legalLink } from '../components/LegalPage'
import { sms } from '../data/sms'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export const consentText = `I agree to receive recurring automated alert text messages from ${sms.brand} (${sms.programName}) at the mobile number provided. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to cancel at any time.`

export default function SmsOptInForm() {
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '')
    if (digits.length !== 10) {
      setStatus('error')
      setError('Please enter a valid 10-digit US mobile number.')
      return
    }
    if (!consent) {
      setStatus('error')
      setError('Please check the box to agree to receive text messages.')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('/api/sms-optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: `+1${digits}`, consent, consentText }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
      setError(`Something went wrong. Please try again or email ${sms.supportEmail}.`)
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center space-y-3" role="status">
        <h2 className="text-2xl font-display font-semibold gradient-text">You&apos;re signed up</h2>
        <p className="text-gray-300">
          Thanks! Your number has been registered for {sms.programName}. Reply STOP to any message to unsubscribe.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
          Mobile phone number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-nova-gradient-start text-white"
          placeholder="(555) 555-5555"
        />
      </div>

      <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-emerald-600"
        />
        <span className="text-sm text-gray-300">
          {consentText} See our{' '}
          <Link href="/terms" className={legalLink}>
            Terms &amp; Conditions
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className={legalLink}>
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {status === 'error' && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end hover:opacity-90 disabled:opacity-60 transition-opacity"
      >
        {status === 'submitting' ? 'Signing up…' : 'Sign up for SMS alerts'}
      </button>
    </form>
  )
}
