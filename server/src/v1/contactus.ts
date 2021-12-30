import { Request, Response, Router } from 'express'

import { IContactUsForm, sendContactUs } from '../services/emailService'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const form = req.body as IContactUsForm
    const success = await sendContactUs(form)

    if(success){
        res.send(success)
    } else {
        res.status(400).send({message: 'Failed to send message.'})
    }
} )

export default router