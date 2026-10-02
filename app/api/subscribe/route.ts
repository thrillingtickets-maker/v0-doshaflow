import { NextResponse } from "next/server"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function POST(request: Request) {
  let email: unknown
  try {
    ;({ email } = await request.json())
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  if (typeof email !== "string" || email.length > 254 || !EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  if (!process.env.KIT_API_KEY) {
    console.error("Subscribe API: KIT_API_KEY is not configured")
    return NextResponse.json({ error: "Signup is temporarily unavailable." }, { status: 503 })
  }

  try {
    // Kit treats an already-subscribed address as a successful subscribe,
    // so duplicates return success without creating a second subscriber.
    const response = await fetch("https://api.convertkit.com/v3/forms/9491836/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: process.env.KIT_API_KEY, email: email.trim().toLowerCase() }),
    })

    if (!response.ok) {
      console.error("Subscribe API: provider responded", response.status)
      return NextResponse.json(
        { error: "We couldn't complete your signup. Please try again." },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Subscribe API error:", error)
    return NextResponse.json(
      { error: "We couldn't complete your signup. Please try again." },
      { status: 500 },
    )
  }
}
