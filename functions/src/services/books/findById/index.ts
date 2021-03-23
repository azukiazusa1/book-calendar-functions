import httpClient from '../../../utils/httpClient'
import { https } from 'firebase-functions'
import { convert } from '../convert'
import { Request } from './types'

export const findById = async (req: Request, context: https.CallableContext) => {
  if (!req.id) {
    new https.HttpsError('invalid-argument', 'rid is required')
  }

  const id = encodeURIComponent(req.id)
  const result = await httpClient.get(`/volumes/${id}`)

  return {
    data: convert(result.data),
  }
}
