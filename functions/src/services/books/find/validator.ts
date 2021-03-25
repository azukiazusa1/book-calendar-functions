import { Request } from "./types";
import { https } from 'firebase-functions'

export const validator = (req: Request) => {
  if (!req.q) {
    throw new https.HttpsError('invalid-argument', 'The function must be called with one arguments "q"')
  }

  const q = convertQuery(req.q)

  return {
    q,
    orderBy: req.orderBy,
    startIndex: req.startIndex,
  } as Request
}

export const convertQuery = (q: string) => {
  return q.replace(/\s+/g, '+')
}