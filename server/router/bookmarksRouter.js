import express from 'express'

import {addBookmarks,getBookmarks,removeBookmarks} from '../controllers/bookmarksControllers.js'


const bookmarksRouter = express.Router()



bookmarksRouter.get('/:id/bookmarks',getBookmarks)
bookmarksRouter.post('/:id/bookmarks',addBookmarks)
bookmarksRouter.delete('/:id/bookmarks/:articleId',removeBookmarks)





export default bookmarksRouter