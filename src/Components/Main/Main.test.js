import Main from './Main'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

/* eslint-disable no-unused-vars */
describe('Main', () => {
  test('renders correctly', () => {
    const component = shallow(<Main />)
    expect(component).toMatchSnapshot()
  })
})
