const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('check that it is returning array', () => {
        let testArr = [1,2,3]
        shuffleArray(testArr)
        expect(typeof(testArr)).toEqual('array')
    })
    test('check if returning array is same length', () => {
        let testArr = [1,2,3]
        shuffleArray(testArr)
        expect(testArr.length).toEqual(3)
    })
})