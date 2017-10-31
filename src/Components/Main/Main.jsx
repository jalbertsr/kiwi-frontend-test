import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Calendar from '../Calendar/RangePicker'
import styles from './Main.css'
import { Row, Col } from 'antd'

export default class Main extends Component {
  constructor () {
    super()
    this.state = {
      from: '',
      to: '',
      departure: '',
      arraival: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit () {
    console.log(`search parameters: ${JSON.stringify(this.state)}`)
  }

  handleChange (value) {
    this.setState(value)
  }

  render () {
    return (
      <div className={styles.searchForm}>
        <Row>
          <Col span={10} offset={4}>
            <p className={styles.searchTitle}>From:</p>
            <SearchBar
              use={'from'}
              onChange={this.handleChange}
              placeholder={'Brno'}
            />
            <p className={styles.searchTitle}>To:</p>
            <SearchBar
              use={'to'}
              onChange={this.handleChange}
              placeholder={'Barcelona'}
            />
            <p className={styles.searchTitle}>Dates:</p>
            <Calendar className={styles.datePicker} />
          </Col>
          <Col span={6}>
            <fieldset>
              <p>My Ticket</p>
                From: {this.state.from} <br />
                To: {this.state.to} <br />
                Arraival: {this.state.arraival} <br />
                Departure: {this.state.departure}
            </fieldset>
          </Col>
        </Row>
      </div>
    )
  }
}
