import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  console.log("[v0] /api/quiz-complete POST hit")
  console.log("[v0] RESEND_API_KEY present:", Boolean(process.env.RESEND_API_KEY))

  const body = await request.json().catch(() => ({}))
  const { result, email, timestamp } = body as {
    result?: string
    email?: string
    timestamp?: string
  }

  const formattedTime = timestamp ? new Date(timestamp).toLocaleString() : new Date().toLocaleString()

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #3d2e1e;">
      <h2 style="margin: 0 0 24px; font-size: 20px;">New DoshaFlow Quiz Completion</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 140px;">Dosha Result</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${result || "Unknown"}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${email || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; font-weight: 600;">Completed</td>
          <td style="padding: 12px 0;">${formattedTime}</td>
        </tr>
      </table>
    </div>
  `

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "thrillingtickets@gmail.com",
    subject: "New DoshaFlow Quiz Completion",
    html,
  })

  console.log("[v0] resend result:", { data, error })

  if (error) {
    return Response.json({ success: false, error }, { status: 500 })
  }

  return Response.json({ success: true, data })
}
