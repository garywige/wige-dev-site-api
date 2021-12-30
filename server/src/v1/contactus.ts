import { Request, Response, Router } from 'express'

import { IContactUsForm, sendContactUs, validateContactUsForm } from '../services/emailService'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    if(await validateContactUsForm(req.body) === false){
        res.status(400).send({message: 'Request was in improper format.'})
    }

    const form = req.body as IContactUsForm
    const success = await sendContactUs(form)

    if(success){
        res.send(success)
    } else {
        res.status(500).send({message: 'Failed to send message.'})
    }
} )

export default router