import { NextResponse } from 'next/server'

// Records a submission from /sms-alerts. SMS consent is optional: a
// submission without it is accepted and never subscribed to texts.
// There's no database yet, so the record is written to the server logs
// (visible in your hosting provider's log viewer).
export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone : null
  const smsConsent = body.smsConsent === true

  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Name and a valid email are required' }, { status: 400 })
  }
  if (phone !== null && !/^\+1\d{10}$/.test(phone)) {
    return NextResponse.json({ error: 'Invalid US phone number' }, { status: 400 })
  }
  if (smsConsent && !phone) {
    return NextResponse.json({ error: 'A phone number is required to receive texts' }, { status: 400 })
  }

  console.log(
    'contact-submission',
    JSON.stringify({
      name,
      email,
      phone,
      smsConsent,
      consentText: smsConsent && typeof body.consentText === 'string' ? body.consentText : null,
      at: new Date().toISOString(),
      ip: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null,
      userAgent: req.headers.get('user-agent'),
    })
  )

  return NextResponse.json({ ok: true })
}
