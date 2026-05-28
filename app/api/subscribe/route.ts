import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    const response = await fetch(
      "https://api.convertkit.com/v3/forms/9491836/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: process.env.KIT_API_KEY,
          email: email,
        }),
      }
    )

    if (!response.ok) {
      const errorBody = await response.text()
      return NextResponse.json(
        { error: true, status: response.status, body: errorBody },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Subscribe API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
