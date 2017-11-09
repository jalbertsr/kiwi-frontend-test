import Searchform from './SearchForm'
import chai, { expect } from 'chai'

describe('Searchform', () => {
  let newSearchform
  const jestMock = jest.fn()
  const props = {
    handleSubmit: jestMock,
    handleChange: jestMock,
    handleDates: jestMock
  }
  beforeEach(() => {
    newSearchform = new Searchform(props)
  })
  afterEach(() => {
    newSearchform = null
  })

  test('it should exist', () => {
    expect(newSearchform).to.exist
  })
  test('it should be defined', () => {
    expect(newSearchform).to.not.be.undefined
  })
})
