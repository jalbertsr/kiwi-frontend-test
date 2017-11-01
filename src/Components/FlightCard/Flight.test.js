import FlightCard from './FlightCard'
import chai, { expect, assert } from 'chai'
import spies from 'chai-spies'

chai.use(spies)

describe('FlightCard', () => {
  let newFlightCard
  const props = {
    loading: true,
    title: 'From Barcelona to París',
    description: {
      flyFrom: 'BCN',
      flyTo: 'ORY',
      price: 285
    },
    departure: '22/10/2017',
    returning: '28/10/2017'
  }

  beforeEach(() => {
    newFlightCard = new FlightCard(props)
  })
  afterEach(() => {
    newFlightCard = null
  })

  test('it should exist', () => {
    expect(newFlightCard).to.exist
  })
  test('it should be defined', () => {
    expect(newFlightCard).to.not.be.undefined
  })
})
