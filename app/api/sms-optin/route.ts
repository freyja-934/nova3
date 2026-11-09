import { NextResponse } from 'next/server'

// Records an SMS opt-in. There's no database yet, so the consent record is
// written to the server logs (visible in your hosting provider's log viewer).
export async function POST(req: Request) {
  let body: { phone?: unknown; consent?: unknown; consentText?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const phone = typeof body.phone === 'string' ? body.phone : ''
  if (!/^\+1\d{10}$/.test(phone) || body.consent !== true) {
    return NextResponse.json({ error: 'A valid US number and consent are required' }, { status: 400 })
  }

  console.log(
    'sms-optin',
    JSON.stringify({
      phone,
      consent: true,
      consentText: typeof body.consentText === 'string' ? body.consentText : null,
      at: new Date().toISOString(),
      ip: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null,
      userAgent: req.headers.get('user-agent'),
    })
  )

  return NextResponse.json({ ok: true })
}
