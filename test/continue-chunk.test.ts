import chunk from '../src'

describe("continue-chunk", () => {
  test('[1, 2, 3] should return [[1,2,3]]', () => {
    const result = chunk([1,2,3])
    expect(result).toMatchObject([[1,2,3]])
  })

  test('[1, 2, 3, 6, 7] should return [[1,2,3], [6, 7]]', () => {
    const result = chunk([1, 2, 3, 6, 7])
    expect(result).toMatchObject([[1, 2, 3],  [6, 7]])
  })

  test('[1, 2, 3, 6] should return [[1,2,3], [6]]', () => {
    const result = chunk([1, 2, 3, 6])
    expect(result).toMatchObject([[1, 2, 3], [6]])
  })

  test('[1, 2, 3, 6, 9, 10] should return [[1,2,3], [6], [9, 10]]', () => {
    const result = chunk([1, 2, 3, 6, 9, 10])
    expect(result).toMatchObject([[1, 2, 3], [6], [9, 10]])
  })
})