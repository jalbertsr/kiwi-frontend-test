import Calendar from './RangePicker'
import chai, { expect } from 'chai'
import spies from 'chai-spies'

chai.use(spies)

describe('Calendar', () => {
  let newCalendar
  const props = 

  beforeEach(() => {
    newCalendar = new Calendar(props)
  })
  afterEach(() => {
    newCalendar = null
  })

  test('it should exist', () => {
    expect(newCalendar).to.exist
  })
  test('it should be defined', () => {
    expect(newCalendar).to.not.be.undefined
  })
})
