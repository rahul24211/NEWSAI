import express from 'express'

import { getReadingHintory,addReadingHintory,removeReadingHintory } from '../controllers/readingHistoryController.js'

const readingHistoryRouter = express.Router()


readingHistoryRouter.get('/:id/reading-history',getReadingHintory)
readingHistoryRouter.post('/:id/reading-history',addReadingHintory)
readingHistoryRouter.delete('/:id/reading-history',removeReadingHintory)





export default readingHistoryRouter