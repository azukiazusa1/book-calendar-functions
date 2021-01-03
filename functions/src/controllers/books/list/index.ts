import httpClient from '../../../services/httpClient'
import { ListRequest } from './types'
import { https }　from 'firebase-functions'

export const list = async (req: ListRequest, context: https.CallableContext) => {
  if (!req.q) {
    throw new https.HttpsError('invalid-argument', 'The function must be called with one arguments "q"')
  }
  const result = await httpClient.get('/volumes', {
    params: {
      q: req.q,
    },
  })
  return {
    data: result.data,
  }
}