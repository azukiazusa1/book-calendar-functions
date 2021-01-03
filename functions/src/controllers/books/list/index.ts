import httpClient from '../../../services/httpClient'
import { validator } from './validator'
import { ListRequest } from './types'
import { https }　from 'firebase-functions'

export const list = async (req: ListRequest, context: https.CallableContext) => {
  const params = validator(req)
  const result = await httpClient.get('/volumes', {
    params,
  })
  return {
    data: result.data,
  }
}