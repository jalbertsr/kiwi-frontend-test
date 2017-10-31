import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import styles from './SearchBar.css'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.onChange({[this.props.use]: e.target.value})
  }

  render () {
    return (
      <Input onChange={this.handleChange} className={styles.input} placeholder={this.props.placeholder} />
    )
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func
}
