import Navbar from './Navbar'
import chai, { expect } from 'chai'
import spies from 'chai-spies'

chai.use(spies)

describe('Navbar', () => {
  let newNavbar

  beforeEach(() => {
    newNavbar = new Navbar()
  })
  afterEach(() => {
    newNavbar = null
  })

  test('it should exist', () => {
    expect(newNavbar).to.exist
  })
  test('it should be defined', () => {
    expect(newNavbar).to.not.be.undefined
  })
})
