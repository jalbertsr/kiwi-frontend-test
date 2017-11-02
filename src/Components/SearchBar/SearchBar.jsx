import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AutoComplete } from 'antd'

import Service from '../../Services/flightService'
import styles from './SearchBar.css'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: []
    }
  }

  handleChange = (value) => {
    let searchValue = value.split('(')[0].trim()
    Service.getPlaces(searchValue)
      .then(data => {
        this.setState({
          dataSource: data.map(places => places.value)
        })
      })
    this.props.onChange({ [this.props.use]: searchValue })
  }

  render () {
    return (
      <AutoComplete
        onChange={this.handleChange}
        dataSource={this.state.dataSource}
        className={styles.input}
        placeholder={this.props.placeholder}
      />
    )
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  use: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}
