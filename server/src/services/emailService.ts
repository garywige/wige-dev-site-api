import { IContactUsForm } from "./interfaces/contact-us-form"

class EmailService{
  constructor(){}

  async sendContactUs(form: IContactUsForm): Promise<boolean> {
    console.log(
      `sendContactUs() called: email address: ${form.email}, subject: ${form.subject}`
    )
    return true
  }
  
  async validateContactUsForm(reqBody: any): Promise<boolean> {
    if (!('email' in reqBody) || !('subject' in reqBody) || !('message' in reqBody))
      return false
  
    return true
  }
}

export const emailService = new EmailService()