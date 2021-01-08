import { convertQuery } from '../../../../../src/controllers/books/list/validator'

describe('src/controllers/books/list/validator', () => {
  describe('convertQuery', () => {
    test('半角文字が+に変換される', () => {
      const q = 'abc cde fgh'
      expect(convertQuery(q)).toBe('abc+cde+fgh')
    })

    test('全角スペースが+に変換される', () => {
      const q = 'あいう　えおか　きくけ'
      expect(convertQuery(q)).toBe('あいう+えおか+きくけ')
    })

    test('半角スペースと全角スペースが混ざったパターン', () => {
      const q = 'abc あいう　cde　いえ fgh'
      expect(convertQuery(q)).toBe('abc+あいう+cde+いえ+fgh')
    }) 
  })
})