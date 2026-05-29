import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { result, email, timestamp } = body as {
      result?: string
      email?: string
      timestamp?: string
    }

    const completedAt = timestamp ? new Date(timestamp) : new Date()
    const formattedTime = completedAt.toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    })

    await resend.emails.send({
      from: "DoshaFlow <onboarding@resend.dev>",
      to: "thrillingtickets@gmail.com",
      subject: "New DoshaFlow Quiz Completion",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 520px; margin: 0 auto; color: #2c2218;">
          <h2 style="color: #3d2e1e; margin-bottom: 16px;">New DoshaFlow Quiz Completion</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #7a6a58; width: 140px;">Dosha Result</td>
              <td style="padding: 8px 0;">${result ?? "Unknown"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #7a6a58;">Email</td>
              <td style="padding: 8px 0;">${email ?? "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #7a6a58;">Completed</td>
              <td style="padding: 8px 0;">${formattedTime}</td>
            </tr>
          </table>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("[v0] quiz-complete email error:", error)
    return Response.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
