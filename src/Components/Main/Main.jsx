import React, { Component } from 'react'
import { Row, Col, Pagination } from 'antd'
import uuidv4 from 'uuid/v4'
import moment from 'moment'
import Service from '../../Services/flightService'
import FlightCard from '../FlightCard/FlightCard'
import SearchForm from '../SearchForm/SearchForm'

export default class Main extends Component {
  constructor () {
    super()
    this.state = {
      from: '',
      to: '',
      departure: '',
      returning: '',
      loading: true,
      results: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDates = this.handleDates.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({ loading: true })
    console.log(`search parameters: ${JSON.stringify(this.state)}`)
    const _from = this.state.from.split('(')[0].trim()
    const to = this.state.to.split('(')[0].trim()
    Service.getFlights(_from, to, this.state.departure, this.state.returning)
          .then(info => {
            console.log('flyy', info)
            this.setState({
              loading: false,
              results: info.data
            })
          })
  }

  handleDates (departure, returning) {
    this.setState({departure, returning})
  }

  handleChange (value) {
    this.setState(value)
  }

  // default search
  componentDidMount () {
    const today = moment().format('DD/MM/YYYY')
    const nextFiveDays = moment().add(5, 'days').format('DD/MM/YYYY')
    Service.getFlights('Barcelona', 'Brno', today, nextFiveDays)
    .then(info => {
      console.log('flyy didmount', info)
      this.setState({
        loading: false,
        results: info.data
      })
    })
  }

  render () {
    return (
      <div>
        <SearchForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleDates={this.handleDates}
        />
        <Row>
          {this.state.results.map(flight => (
            <Col span={6} key={uuidv4()}>
              <FlightCard
                loading={this.state.loading}
                title={`From ${flight.route['0'].cityFrom} to ${flight.route['0'].cityTo}`}
                info={flight}
              />
            </Col>
            )
          )}
        </Row>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    )
  }
}
