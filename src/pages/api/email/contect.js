import nodeMalter from 'nodemailer'
export default function handler(req, res) {
  const contactForm = (data) => {
    const { name, email, company, phone, job, country } = data
    return `
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            p {
              margin-bottom: 20px;
            }
            h3 {
              margin-top: 30px;
              margin-bottom: 10px;
            }
            ul {
              margin: 0;
              padding: 0;
              list-style: none;
            }
            li {
              margin-bottom: 5px;
            }
            strong {
              margin-right: 5px;
            }
          </style>
        </head>
        <body>
          <h3>New Contact Form Submission</h3>
          <p>Here are the details of the new Contact form submission:</p>
          <ul>
            <li><strong>Full Name:</strong> ${name}</li>
            <li><strong>Email : </strong> ${email}</li>
            <li><strong>Phone : </strong> ${phone}</li>
            <li><strong>Company : </strong> ${company}</li>
            <li><strong>Job : </strong> ${job}</li>
            <li><strong>Country : </strong> ${country}</li>
          </ul>
        </body>
      </html>
      `
  }

  if (req.method === 'POST') {
    const transporter = nodeMalter.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      },
      port: 465,
      host: 'smtp.gmail.com'
    })
    const data = req.body
    const mainOption = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: req?.body?.job,
      html: contactForm(data)
    }
    transporter.sendMail(mainOption, (error, info) => {
      if (error) {
        console.log(error)
        res.status(405).json({
          massage: "email sending failed",
          status: false
        })
      } else {
        res.status(200).json({
          massage: "email sending success",
          status: true
        })
      }
    })
  } else {
    res.status(405).json({
      status: false,
      massage: 'Method Not Allowed'
    })
  }
}