export type OrderBy = 'relevance' | 'newest'
export type PrintType = 'all' | 'books' | 'magazines'

export interface request {
  q?: string
  orderBy?: OrderBy
  printType?: PrintType
  startIndex?: number
}