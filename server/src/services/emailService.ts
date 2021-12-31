export async function sendContactUs(form: IContactUsForm): Promise<boolean> {
  console.log(`sendContactUs() called: email address: ${form.email}, subject: ${form.subject}`)
  return true
}

export interface IContactUsForm {
  email: string
  subject: string
  message: string
}

export async function validateContactUsForm(reqBody: any): Promise<boolean> {
  if (!('email' in reqBody) || !('subject' in reqBody) || !('message' in reqBody))
    return false

  return true
}
