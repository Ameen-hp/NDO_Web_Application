import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, message) => {
  try {
    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP config if you have custom mail server
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your Gmail App Password
      },
    });

    // 2. Define mail options
    const mailOptions = {
      from: `"NDO Support" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: `<div style="font-family:sans-serif;">
              <h2>Thank you for contacting NDO</h2>
              <p>${message}</p>
              <p>Best Regards,<br/>Nari Development Organization</p>
            </div>`,
    };

    // 3. Send email
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully to", to);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};
