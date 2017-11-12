import SearchBar from './SearchBar'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

/* eslint-disable no-unused-vars */

describe('SearchBar', () => {
  const jestMock = jest.fn()
  const props = {
    use: 'from',
    placeholder: 'Brno',
    onChange: jestMock
  }
  test('renders correctly', () => {
    const component = shallow(<SearchBar {...props} />)
    expect(component).toMatchSnapshot()
  })
})
