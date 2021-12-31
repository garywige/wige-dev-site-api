import { Request, Response, Router } from 'express'

import {
  sendContactUs,
  validateContactUsForm,
} from '../../services/emailService'
import { IContactUsForm } from '../../services/interfaces/contact-us-form'
import { IServerMessage } from '../../services/interfaces/server-message'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
  if ((await validateContactUsForm(req.body)) === false) {
    res.status(400).send({ message: 'Request body is in improper format' } as IServerMessage)
    return
  }

  const form = req.body as IContactUsForm
  const success = await sendContactUs(form)

  if (success) {
    res.status(200).send(req.body as IContactUsForm)
  } else {
    res.status(500).send({ message: 'Message failed to send' } as IServerMessage)
  }
})

export default router
