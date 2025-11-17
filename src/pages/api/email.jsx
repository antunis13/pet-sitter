import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, email, tel, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: "Site <onboarding@resend.dev>",
      to: ["richardantunis4@gmail.com"],
      subject: "Contato do Site",
      react: EmailTemplate({ name, email, tel, message }),
    });

    return res.status(200).json({ message: "Email enviado", response });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({ error: "Erro ao enviar email" });
  }
}
