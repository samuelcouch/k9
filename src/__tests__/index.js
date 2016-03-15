jest.dontMock('../index')
const watchdog = require('../index').default

describe('k9', () => {
    it('should have an empty queue when initiated', () => {
        expect(watchdog.tasks.length).toBe(0)
    })
})
