import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>What's Poppin?</h1>
    <p>Discover what's happening around you in real-time</p>
  </header>
)

export default Header
