export async function sendContactUs(form: IContactUsForm): Promise<boolean> {
    return false
}

export interface IContactUsForm {
    email: string
    subject: string
    message: string
}