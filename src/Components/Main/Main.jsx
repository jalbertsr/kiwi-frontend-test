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
      from: 'Barcelona',
      to: 'Brno',
      departure: moment().format('DD/MM/YYYY'),
      returning: moment().add(5, 'days').format('DD/MM/YYYY'),
      loading: true,
      results: [],
      page: 1,
      resultsLength: 0,
      slice: {
        init: 0,
        final: 18
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.getResults(this.state.from, this.state.to, 
      this.state.departure, this.state.returning, {init: 0, final: 18})
  }

  handleDates = (departure, returning) => {
    this.setState({departure, returning})
  }

  handleChange = (value) => {
    this.setState(value)
  }

  handleChangePage = (page) => {
    let init, final
    const coeficient = Math.abs(page - this.state.page) * 18
    if (page > this.state.page) {
      init = this.state.slice.init + coeficient
      final = this.state.slice.final + coeficient
    } else if (page < this.state.page) {
      init = this.state.slice.init - coeficient
      final = this.state.slice.final - coeficient
    }
    this.setState({
      page: page,
      slice: { init, final }
    })
    this.getResults(this.state.from, this.state.to, 
      this.state.departure, this.state.returning, this.state.slice)
  }

  getResults = async (_from, to, departure, returning, slice) => {
    this.setState({ loading: true })
    const info = await Service.getFlights(_from, to, departure, returning)
    try {
      this.setState({
        loading: false,
        resultsLength: info.data.length,
        results: info.data.slice(slice.init, slice.final)
      })
    } catch (e) {
      throw new Error(e)
    }
  }

  componentDidMount () {
    this.getResults(this.state.from, this.state.to, 
      this.state.departure, this.state.returning, {init: 0, final: 18})
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
          <Col className={styles.spacePagination} sm={19} offset={2}>
            <Pagination
              onChange={this.handleChangePage}
              className={styles.pagination}
              current={this.state.page}
              defaultCurrent={1}
              total={this.state.resultsLength}
            />
            <h3>Total Results: {this.state.resultsLength}</h3>
          </Col>
        </Row>
        <Row gutter={14}>
          {this.state.results.map((flight, i) =>
            <Col offset={2} sm={8} md={5} key={uuidv4()}>
              <FlightCard
                loading={this.state.loading}
                title={`From ${flight.cityFrom} to ${flight.cityTo}`}
                description={flight}
                departure={this.state.departure}
                returning={this.state.returning}
                index={i}
              />
            </Col>
          )}
        </Row>
      </div>
    )
  }
}
