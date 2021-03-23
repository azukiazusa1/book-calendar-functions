import { https } from 'firebase-functions'
import bookService from './services/books'

export const find = https.onCall(bookService.find)
export const findById = https.onCall(bookService.findById)
