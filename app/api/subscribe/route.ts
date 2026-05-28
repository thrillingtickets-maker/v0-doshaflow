import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email_address } = body

    if (!email_address) {
      return NextResponse.json(
        { error: "Email address is required" },
        { status: 400 }
      )
    }

    const response = await fetch(
      "https://app.kit.com/forms/93062a6d88/subscriptions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_address }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Kit API error:", response.status, errorText)
      return NextResponse.json(
        { error: "Subscription failed" },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Subscribe API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
