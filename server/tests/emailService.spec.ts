import { emailService } from '../src/services/emailService'
import { IContactUsForm } from '../src/services/interfaces/contact-us-form'

describe('emailService', () => {
  const goodInput: IContactUsForm = {
    email: 'test@test.com',
    subject: 'my subject',
    message: 'hello!',
  }

  describe('validateContactUsForm', () => {
    it('should return false with invalid input.', async () => {
      const badInput: any = { input: 'bad', bad: true }
      const result: boolean = await emailService.validateContactUsForm(badInput)
      expect(result).toEqual(false)
    })

    it('should return true with valid input', async () => {
      const result: boolean = await emailService.validateContactUsForm(goodInput)
      expect(result).toEqual(true)
    })
  })
  /*
  describe('sendContactUs', () => {
    it('should return true with valid input', async () => {
      const result: boolean = await emailService.sendContactUs(goodInput)
      expect(result).toEqual(true)
    })
  })
  */
})
