import SearchBar from './SearchBar'
import chai, { expect, assert } from 'chai'

describe('SearchBar', () => {
  let newSearchBar

  beforeEach(() => {
    newSearchBar = new SearchBar()
  })
  afterEach(() => {
    newSearchBar = null
  })

  test('it should exist', () => {
    expect(newSearchBar).to.exist
  })
  test('it should be defined', () => {
    expect(newSearchBar).to.not.be.undefined
  })
  test('newSearchBar is an instance of SearchBar', () => {
    assert.instanceOf(newSearchBar, SearchBar)
  })
})
