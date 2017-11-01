import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

export default class Navbar extends Component {
  render () {
    return (
      <Menu mode='horizontal'>
        <Menu.Item >
          <Link to='/'>
            <Icon type='home' /> Home
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}
