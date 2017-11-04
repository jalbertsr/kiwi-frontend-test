import Main from './Main'
import chai, { expect } from 'chai'
import spies from 'chai-spies'

chai.use(spies)

describe('Main', () => {
  let newMain
  beforeEach(() => {
    newMain = new Main()
  })
  afterEach(() => {
    newMain = null
  })

  test('it should exist', () => {
    expect(newMain).to.exist
  })
  test('it should be defined', () => {
    expect(newMain).to.not.be.undefined
  })
  describe('Main methods', () => {
    test('getResults has been called', () => {
      const main = new Main()
      const spy = chai.spy.on(main, 'getResults')
      main.getResults()
      expect(spy).to.have.been.called()
    })
  })
})
