import NavBar from './NavBar'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

/* eslint-disable no-unused-vars */

describe('NavBar', () => {
  test('NavBar renders correctly', () => {
    const component = shallow(<NavBar />)
    expect(component).toMatchSnapshot()
  })
})
