import FlightCard from './FlightCard'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import { MemoryRouter as Router } from 'react-router-dom'

configure({ adapter: new Adapter() })

/* eslint-disable no-unused-vars */

describe('FlightCard', () => {
  const props = {
    loading: true,
    title: 'From Barcelona to París',
    description: {
      flyFrom: 'BCN',
      flyTo: 'ORY',
      price: 285
    },
    departure: '22/10/2017',
    returning: '28/10/2017',
    index: 3
  }
  it('renders correctly', () => {
    const component = shallow(
      <Router>
        <FlightCard {...props} />
      </Router>)
    expect(component).toMatchSnapshot()
  })
  it('renders a "Price: "', () => {
    const component = shallow(
      <Router>
        <FlightCard {...props} />
      </Router>)
    expect(component.html().includes(
      '<div class="ant-card-head-title">From Barcelona to París</div>')
    ).toBe(true)
  })
})
