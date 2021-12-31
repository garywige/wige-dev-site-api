import {
  IContactUsForm,
  sendContactUs,
  validateContactUsForm,
} from '../src/services/emailService'

describe('emailService', () => {
  const goodInput: IContactUsForm = {
    email: 'test@test.com',
    subject: 'my subject',
    message: 'hello!',
  }

  describe('validateContactUsForm', () => {
    it('should return false with invalid input.', async () => {
      const badInput: any = { input: 'bad', bad: true }
      const result: boolean = await validateContactUsForm(badInput)
      expect(result).toEqual(false)
    })

    it('should return true with valid input', async () => {
      const result: boolean = await validateContactUsForm(goodInput)
      expect(result).toEqual(true)
    })
  })

  describe('sendContactUs', () => {
    it('should return true with valid input', async () => {
      const result: boolean = await sendContactUs(goodInput)
      expect(result).toEqual(true)
    })
  })
})
