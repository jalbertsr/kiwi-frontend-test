import Calendar from './RangePicker'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

/* eslint-disable no-unused-vars */

const jestMock = jest.fn()

test('Calendar renders correctly', () => {
  const component = shallow(<Calendar getDates={jestMock} />)
  expect(component).toMatchSnapshot()
})
