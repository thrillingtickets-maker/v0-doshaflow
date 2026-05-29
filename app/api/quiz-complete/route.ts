import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  console.log("[v0] /api/quiz-complete POST hit")
  console.log("[v0] RESEND_API_KEY present:", Boolean(process.env.RESEND_API_KEY))

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "thrillingtickets@gmail.com",
    subject: "Test",
    text: "Test email from DoshaFlow",
  })

  console.log("[v0] resend result:", { data, error })

  if (error) {
    return Response.json({ success: false, error }, { status: 500 })
  }

  return Response.json({ success: true, data })
}
