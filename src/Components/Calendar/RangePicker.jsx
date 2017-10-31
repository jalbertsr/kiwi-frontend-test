import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker

export default class Calendar extends Component {
  constructor () {
    super()
    this.state = {
      range: ''
    }
    this.handleRange = this.handleRange.bind(this)
  }
  handleRange (e) {
    const departure = moment(e[0]._d).format('DD/MM/YYYY')
    const returning = moment(e[1]._d).format('DD/MM/YYYY')
    console.log('arraival', departure)
    console.log('departure', returning)
  }

  render () {
    return (
      <RangePicker onChange={this.handleRange} />
    )
  }
}

Calendar.propTypes = {}
