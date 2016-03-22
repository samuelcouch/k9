jest.dontMock('../index')
jest.dontMock('../bark')
const K9 = require('../index').default

describe('k9', () => {
  it('should have an empty task list when initiated', () => {
		let watchdog = new K9()
    expect(watchdog.getTasks().length).toBe(0)
  })
})
