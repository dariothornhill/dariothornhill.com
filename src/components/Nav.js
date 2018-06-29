import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'skills', 'interests','footer', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Introduction</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="skills">
                    <a href="#">Skills</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="interests">
                    <a href="#">Interests</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="footer">
                    <a href="#">Contact</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
