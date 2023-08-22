import { createTransport } from "nodemailer";
import "dotenv/config";
import Mailgen from "mailgen";

export interface IEmailRequest {
  to: string;
  subject: string;
  text: string;
}
class EmailService {
  async sendEmail({ to, subject, text }: IEmailRequest) {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter
      .sendMail({
        from: "projetoFinalGrupo05@gmail.com",
        to,
        subject,
        html: text,
      })
      .then(() => {
        console.log("Email send");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  resetPasswordTemplate(
    userEmail: string,
    userName: string,
    resetToken: string
  ) {
    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Recovery Password",
        link: "http://localhost:3000/user",
      },
    });

    const email = {
      body: {
        name: userName,
        intro:
          "You have received this email because a password reset request for your account was received.",
        action: {
          instructions: "Click the button below to reset your password:",
          button: {
            color: "#DC4D2F",
            text: "Reset your password",
            link: `http://localhost:5173/resetPassword?${resetToken}`,
          },
        },
        outro:
          "If you did not request a password reset, no further action is required on your part.",
      },
    };

    const emailBody = mailGenerator.generate(email);

    const emailtemplate = {
      to: userEmail,
      subject: "Reset Password",
      text: emailBody,
    };
    return emailtemplate;
  }
}

const emailservice = new EmailService();

export { emailservice };
