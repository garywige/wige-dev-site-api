import { Router } from 'express'

import contactus from './routes/contactus'

const router = Router()

// configure api routers here
router.use('/contactus', contactus)

export default router
