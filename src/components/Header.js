import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';
import logo_dt from '../assets/images/logo_dt.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo_dt} alt="" /></span>
        <h1>Hello Friend!</h1>
        <p>I write code that moves information and makes things work.</p>
    </header>
)

export default Header
