const square = require("./square")

describe("square", () => {
    let mockValue

    // перед каждым тестом
    beforeEach(() => {
        mockValue = Math.random()
        // добавить в бд
    })

    // один раз перед всеми тестами
    beforeAll(() => {

    })

    test("Корректное значение", () => {
        // expect(square(2)).toBe(4)
        // expect(square(2)).toBeLessThan(5)
        // expect(square(2)).not.toBeUndefined()

        const spyMathPow = jest.spyOn(Math, "pow")

        square(2)

        expect(spyMathPow).toBeCalledTimes(1)
    })

    test("Корректное значение", () => {
        const spyMathPow = jest.spyOn(Math, "pow")

        square(1)

        expect(spyMathPow).toBeCalledTimes(0)
    })

    afterEach(() => {
        // удалить из бд
        jest.clearAllMocks()
    })
    // afterAll()
})