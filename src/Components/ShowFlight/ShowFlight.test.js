import ShowFlight from './ShowFlight'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

/* eslint-disable no-unused-vars */

describe('ShowFlight', () => {
  const props = {
    match: {
      params: {
        query: 'flight/flyFrom=BCN&flyTo=BRQ&departure=01-11-2017&returning=06-11-2017'
      }
    }
  }
  test('renders correctly', () => {
    const component = shallow(<ShowFlight {...props} />)
    expect(component).toMatchSnapshot()
  })
})
