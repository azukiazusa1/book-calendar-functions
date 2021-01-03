import { https } from 'firebase-functions'
import bookController from './controllers/books'

export const books = https.onCall(bookController.list)