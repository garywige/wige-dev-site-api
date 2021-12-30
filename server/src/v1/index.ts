import {Router} from 'express'

import email from './email'

const router = Router()

// configure api routers here
router.use('email', email)

export default router