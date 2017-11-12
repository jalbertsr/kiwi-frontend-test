import FlightMap from './Map'
import chai, { expect } from 'chai'
import spies from 'chai-spies'

chai.use(spies)

describe('FlightMap', () => {
  let newFlightMap
  const props = {
    latFrom: 41.3888,
    latTo: 51.5135984673085,
    lngFrom: 2.15899,
    lngTo: -0.116472244262695
  }

  beforeEach(() => {
    newFlightMap = new FlightMap(props)
  })
  afterEach(() => {
    newFlightMap = null
  })

  test('it should exist', () => {
    expect(newFlightMap).to.exist
  })
  test('it should be defined', () => {
    expect(newFlightMap).to.not.be.undefined
  })

  describe('FlightMap methods', () => {
    test('calculateCenter returns an object', () => {
      const flightMap = new FlightMap(props)
      const spy = chai.spy.on(flightMap, 'calculateCenter')
      flightMap.calculateCenter()
      expect(typeof spy()).equal('object')
    })
  })
})