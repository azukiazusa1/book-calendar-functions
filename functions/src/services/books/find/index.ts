import httpClient from '../../../utils/httpClient'
import { validator } from './validator'
import { Request } from './types'
import { https } from 'firebase-functions'
import { convertList } from '../convert'

export const find = async (req: Request, context: https.CallableContext) => {
  const params = validator(req)
  const result = await httpClient.get('/volumes', {
    params,
  })
  return {
    data: convertList(result.data),
  }
}
