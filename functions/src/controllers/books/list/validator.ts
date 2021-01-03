import { ListRequest } from "./types";
import { https } from 'firebase-functions'

export const validator = (req: ListRequest) => {
  if (!req.q) {
    throw new https.HttpsError('invalid-argument', 'The function must be called with one arguments "q"')
  }

  return {
    q: req.q,
  } as ListRequest
}