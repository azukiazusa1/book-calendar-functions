import httpClient from '../../../services/httpClient'
import { https }　from 'firebase-functions'

export const list = async (data: any, context: https.CallableContext) => {
  try {
    const result = await httpClient.get('/volumes?q=search+terms')
    console.log(result)
    return {
      data: result.data,
    }
  } catch(e) {
    console.log(e.message)
    return {
      data: e,
    }
  }
}