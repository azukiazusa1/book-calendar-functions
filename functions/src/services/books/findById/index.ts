import httpClient from '../../../utils/httpClient'
import { https } from 'firebase-functions'
import { convert } from '../convert'
import { Request } from './types'

export const findById = async (req: Request) => {
  if (!req.id) {
    throw new https.HttpsError('invalid-argument', 'id is required')
  }

  const id = encodeURIComponent(req.id)

  try {
    const result = await httpClient.get(`/volumes/${id}`)
    return {
      data: convert(result.data),
    }
  } catch (e) {
    throw new https.HttpsError('not-found', 'not found')
  }
}
