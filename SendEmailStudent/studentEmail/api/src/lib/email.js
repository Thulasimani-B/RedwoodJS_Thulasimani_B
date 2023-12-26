const nodemailer = require('nodemailer')

async function sendEmail({ to, subject, text, body }) {
  console.log('Sending email to: ', to)

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: 'divyabalu432002@gmail.com',
      pass: process.env.SEND_IN_BLUE_KEY,
    },
    debug: true,
  })

  const info = await transporter.sendMail({
    from: '"Thulasi" <divyabalu432002@gmail.com>',
    to: Array.isArray(to) ? to : [to],
    subject,
    text,
    body,
  })

  return info
}

module.exports = { sendEmail }
