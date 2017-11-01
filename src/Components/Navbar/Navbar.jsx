import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const Navbar = () =>
  <Menu mode='horizontal'>
    <Menu.Item >
      <Link to='/'>
        <Icon type='home' /> Home
      </Link>
    </Menu.Item>
  </Menu>

export default Navbar
