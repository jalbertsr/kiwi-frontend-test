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
  }
  handleRange = (e) => {
    const departure = moment(e[0]._d).format('DD/MM/YYYY')
    const returning = moment(e[1]._d).format('DD/MM/YYYY')
    this.props.getDates(departure, returning)
  }

  render () {
    return (
      <RangePicker onChange={this.handleRange} />
    )
  }
}

Calendar.propTypes = {
  getDates: PropTypes.func.isRequired
}
