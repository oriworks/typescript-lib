import { randomInt } from 'crypto'
import { sum } from '.'

describe('sum', () => {
  it('should return 0 if call funtion without params', () => {
    expect(sum()).toEqual(0)
  })
  it('should return `n` if call funtion with only one parameter as `n`', () => {
    // Arrange
    const n = randomInt(10)

    // Act
    const result = sum(n)

    // Assert
    expect(result).toEqual(n)
  })
  it('should return sum of argument values provide to function', () => {
    // Arrange
    const [expectedSum, args] = Array.from({ length: 4 }, () => randomInt(10)).reduce<[number, number[]]>((agg, value) => [agg[0] + value, [...agg[1], value]], [0, []])

    // Act
    const result = sum(...args)

    // Assert
    expect(result).toEqual(expectedSum)
  })
})
