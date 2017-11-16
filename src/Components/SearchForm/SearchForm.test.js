import Searchform from './SearchForm'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

/* eslint-disable no-unused-vars */

const jestMock = jest.fn()
const props = {
  handleSubmit: jestMock,
  handleChange: jestMock,
  handleDates: jestMock
}
test('Searchform renders correctly', () => {
  const component = shallow(<Searchform {...props} />)
  expect(component).toMatchSnapshot()
})
