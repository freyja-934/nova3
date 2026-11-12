'use client'

import Link from 'next/link'
import { useState } from 'react'
import { legalLink } from '../components/LegalPage'
import { sms } from '../data/sms'

type Status = 'idle' | 'submitting' | 'success' | 'error'

// Shown next to the optional SMS checkbox. It covers text messages only;
// it is not an agreement to the Terms and not required to submit the form.
export const consentText = `Yes, send me automated alert text messages from ${sms.brand} (${sms.programName}) at the mobile number above. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to cancel at any time. Optional: consent is not required to contact us or use our services.`

const inputClass =
  'w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-fg placeholder:text-fg-3 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40'

export default function SmsOptInForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [smsConsent, setSmsConsent] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [optedIn, setOptedIn] = useState(false)

  const fail = (message: string) => {
    setStatus('error')
    setError(message)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return fail('Please enter your name.')
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return fail('Please enter a valid email address.')

    const digits = phone.replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '')
    if (phone.trim() && digits.length !== 10) return fail('Please enter a valid 10-digit US mobile number.')
    if (smsConsent && digits.length !== 10) return fail('Add your mobile number to receive text messages.')

    setStatus('submitting')
    try {
      const res = await fetch('/api/sms-optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: digits ? `+1${digits}` : null,
          smsConsent,
          consentText: smsConsent ? consentText : null,
        }),
      })
      if (!res.ok) throw new Error()
      setOptedIn(smsConsent)
      setStatus('success')
    } catch {
      fail(`Something went wrong. Please try again or email ${sms.supportEmail}.`)
    }
  }

  if (status === 'success') {
    return (
      <div className="space-y-3 text-center" role="status">
        <h2 className="text-gradient text-2xl font-medium tracking-tight">Thanks, you&apos;re all set</h2>
        <p className="text-fg-2">
          {optedIn
            ? `We'll be in touch by email, and your number is signed up for ${sms.programName}. Reply STOP to any text to unsubscribe.`
            : "We'll be in touch by email. You won't receive any text messages."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg">
            Name *
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-fg">
          Mobile phone number <span className="font-normal text-fg-3">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
          placeholder="(555) 555-5555"
        />
      </div>

      <fieldset className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <legend className="px-2 text-sm font-medium text-fg">Text message alerts (optional)</legend>
        <label htmlFor="smsConsent" className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            id="smsConsent"
            name="smsConsent"
            checked={smsConsent}
            onChange={(e) => setSmsConsent(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-violet-500"
          />
          <span className="text-sm text-fg-2">{consentText}</span>
        </label>
        <p className="mt-3 pl-7 text-sm text-fg-3">
          Don&apos;t want texts? Leave this box unchecked. You can still submit this form, and we&apos;ll only contact
          you by email.
        </p>
      </fieldset>

      {status === 'error' && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-60">
        {status === 'submitting' ? 'Submitting…' : 'Submit'}
      </button>

      <p className="text-center text-sm text-fg-3">
        Read our{' '}
        <Link href="/privacy" className={legalLink}>
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link href="/terms" className={legalLink}>
          SMS Terms
        </Link>{' '}
        to learn how we handle your information.
      </p>
    </form>
  )
}
