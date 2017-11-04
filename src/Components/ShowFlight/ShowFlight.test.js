import ShowFlight from './ShowFlight'
import chai, { expect, assert } from 'chai'
import spies from 'chai-spies'

chai.use(spies)

describe('ShowFlight', () => {
  let newShowFlight

  const props = {
    match: {
      params: {
        query: 'flight/flyFrom=BCN&flyTo=BRQ&departure=01-11-2017&returning=06-11-2017'
      }
    }
  }

  beforeEach(() => {
    newShowFlight = new ShowFlight(props)
  })
  afterEach(() => {
    newShowFlight = null
  })

  test('it should exist', () => {
    expect(newShowFlight).to.exist
  })
  test('it should be defined', () => {
    expect(newShowFlight).to.not.be.undefined
  })
  test('newShowFlight is an instance of ShowFlight', () => {
    assert.instanceOf(newShowFlight, ShowFlight)
  })
})