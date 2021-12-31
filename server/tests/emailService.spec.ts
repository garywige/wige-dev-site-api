import { IContactUsForm, sendContactUs, validateContactUsForm } from '../src/services/emailService'

describe('emailService', () => {

    const goodInput: IContactUsForm = {
        email: 'test@test.com',
        subject: 'my subject',
        message: 'hello!'
    }

   describe('validateContactUsForm', () => {
        it('should return false with invalid input.', async () => {
            let badInput: any = {input: "bad", bad: true}
            let result: boolean = await validateContactUsForm(badInput)
            expect(result).toEqual(false)
        })

        it('should return true with valid input', async () => {
            let result: boolean = await validateContactUsForm(goodInput)
            expect(result).toEqual(true)
        })
   }) 

   describe('sendContactUs', () => {
        it('should return true with valid input', async () => {
            let result: boolean = await sendContactUs(goodInput)
            expect(result).toEqual(true)
        })
   })
})