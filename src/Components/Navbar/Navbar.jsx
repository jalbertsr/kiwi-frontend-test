import React from 'react'
import { Link, Router } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const Navbar = () =>
  <Menu mode='horizontal'>
    <Menu.Item >
      <Router>
        <Link to='/'>
          <Icon type='home' /> Home
        </Link>
      </Router>
    </Menu.Item>
  </Menu>

export default Navbar
