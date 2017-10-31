import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    console.log(e)
  }

  render () {
    return (
      <RangePicker onChange={this.handleRange} />
    )
  }
}

Calendar.propTypes = {}
