import Searchform from './FlightDescription'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

/* eslint-disable no-unused-vars */

test('FlightDescription renders correctly', () => {
  const props = {
    price: 40,
    cityFrom: 'Barcelona',
    cityTo: 'Brno',
    fly_duration: '3h',
    id: '4322jnj2|dwefwer423',
    bags_price: [23, 45, 68],
    distance: 3345
  }
  const component = shallow(<Searchform {...props} />)
  expect(component).toMatchSnapshot()
})
