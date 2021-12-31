import { IContactUsForm } from './interfaces/contact-us-form'

class EmailService {
  constructor() {}

  async sendContactUs(form: IContactUsForm): Promise<boolean> {
    const sgMail = require('@sendgrid/mail')

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: process.env.SITE_OWNER_EMAIL,
      from: process.env.SITE_OWNER_EMAIL,
      subject: 'Wige-Dev Contact Us Submission',
      text: `
        Email: ${form.email}
        Subject: ${form.subject}
        Message: ${form.message}
      `,
    }

    let result = true

    await sgMail.send(msg).then(
      () => {},
      (error: { response: { body: any } }) => {
        console.error(error)

        if (error.response) {
          console.error(error.response.body)
        }

        result = false
      }
    )

    return result
  }

  async validateContactUsForm(reqBody: any): Promise<boolean> {
    if (!('email' in reqBody) || !('subject' in reqBody) || !('message' in reqBody))
      return false

    return true
  }
}

export const emailService = new EmailService()
