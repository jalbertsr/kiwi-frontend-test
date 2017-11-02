import React, { Component } from 'react'
import { Row, Col, Pagination } from 'antd'
import uuidv4 from 'uuid/v4'
import moment from 'moment'
import styles from './Main.css'
import Service from '../../Services/flightService'
import FlightCard from '../FlightCard/FlightCard'
import SearchForm from '../SearchForm/SearchForm'

export default class Main extends Component {
  constructor () {
    super()
    this.state = {
      from: '',
      to: '',
      departure: moment().format('DD/MM/YYYY'),
      returning: moment().add(5, 'days').format('DD/MM/YYYY'),
      loading: true,
      results: [],
      page: 1,
      slice: {
        init: 0,
        final: 18
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(`search parameters: ${JSON.stringify(this.state)}`)
    const _from = this.state.from.split('(')[0].trim()
    const to = this.state.to.split('(')[0].trim()
    this.getResults(_from, to, this.state.departure, this.state.returning, {init: 0, final: 18})
  }

  handleDates = (departure, returning) => {
    this.setState({departure, returning})
  }

  handleChange = (value) => {
    this.setState(value)
  }

  handleChangePage = (page) => {
    console.log('change page', page)
    const init = this.state.slice.init + 18
    const final = this.state.slice.final + 18
    this.setState({ init, final })
    const _from = this.state.from.split('(')[0].trim()
    const to = this.state.to.split('(')[0].trim()
    this.getResults(_from, to, this.state.departure, this.state.returning, this.state.slice)
  }

  getResults = (_from, to, departure, returning, slice) => {
    this.setState({ loading: true })
    Service.getFlights(_from, to, departure, returning)
      .then(info => {
        console.log(info.data.slice(slice.init, slice.final))
        this.setState({
          loading: false,
          results: info.data.slice(slice.init, slice.final)
        })
      })
  }

  // default search
  componentDidMount () {
    this.getResults('Barcelona', 'Brno', this.state.departure, this.state.returning, {init: 0, final: 18})
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
          <Col className={styles.spacePagination} span={19} offset={2}>
            <Pagination
              onChange={this.handleChangePage}
              className={styles.pagination}
              defaultCurrent={1}
              total={50} />
            <h3>Search Results:</h3>
          </Col>
        </Row>
        <Row gutter={16}>
          {this.state.results.map(flight =>
            <Col offset={2} span={5} key={uuidv4()}>
              <FlightCard
                loading={this.state.loading}
                title={`From ${flight.cityFrom} to ${flight.cityTo}`}
                description={flight}
                departure={this.state.departure}
                returning={this.state.returning}
              />
            </Col>
          )}
        </Row>
      </div>
    )
  }
}
