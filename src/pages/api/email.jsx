import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, tel, message } = req.body 

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: 'richardantunis4@gmail.com',
        pass: 'qjavgnuowyabvnok',
      },
    })  

    const mailOptions = {
      from: 'richardantunis4@gmail.com',
      to: 'richardantunis4@gmail.com',
      subject: 'Contato do site',
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${tel}\nMensagem: ${message}`,
    } 

    try {
      const info = await transporter.sendMail(mailOptions) 
      res.status(200).json({ message: 'Email enviado com sucesso', info }) 
    } catch (error) {
      console.error('Erro ao enviar o email:', error) 
      res.status(500).json({ message: 'Erro ao enviar o email' }) 
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' }) 
  }
}
