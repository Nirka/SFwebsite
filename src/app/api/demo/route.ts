import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, organization, role, message } = await req.json();

  if (!name || !email || !organization) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // 1. Notification to sales
    await resend.emails.send({
      from: "StudyFlow <noreply@studyflow.cloud>",
      to: "sales@prodify.com",
      subject: `New Demo Request from ${name} — ${organization}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E3A5F;">New Demo Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Organization</td><td style="padding: 8px 0;">${organization}</td></tr>
            ${role ? `<tr><td style="padding: 8px 0; color: #666;">Role</td><td style="padding: 8px 0;">${role}</td></tr>` : ""}
            ${message ? `<tr><td style="padding: 8px 0; color: #666;">Message</td><td style="padding: 8px 0;">${message}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    // 2. Thank you email to the user
    await resend.emails.send({
      from: "StudyFlow <noreply@studyflow.cloud>",
      to: email,
      subject: "Thank you for your interest in StudyFlow",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="text-align: center; padding: 32px 0 24px;">
            <h1 style="color: #1E3A5F; font-size: 24px; margin: 0;">StudyFlow</h1>
          </div>
          <div style="background: #f8f9fb; border-radius: 12px; padding: 32px;">
            <h2 style="color: #1E3A5F; font-size: 20px; margin: 0 0 16px;">Thank you, ${name}!</h2>
            <p style="line-height: 1.6; margin: 0 0 16px;">
              We've received your demo request and our team is excited to show you how StudyFlow
              can streamline clinical research operations at ${organization}.
            </p>
            <p style="line-height: 1.6; margin: 0 0 16px;">
              A member of our team will reach out within <strong>1–2 business days</strong> to schedule
              a personalized demo tailored to your needs.
            </p>
            <p style="line-height: 1.6; margin: 0 0 24px;">
              In the meantime, feel free to explore our website to learn more about how we help
              medical centers unify workflows, compliance, and sponsor collaboration.
            </p>
            <div style="text-align: center;">
              <a href="https://www.studyflow.cloud"
                 style="display: inline-block; background: #1E3A5F; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                Visit StudyFlow
              </a>
            </div>
          </div>
          <div style="text-align: center; padding: 24px 0; color: #999; font-size: 12px;">
            <p style="margin: 0;">© ${new Date().getFullYear()} StudyFlow by Prodify Software</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
