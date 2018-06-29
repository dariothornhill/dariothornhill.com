import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Reach Out</h2>
            <dl className="alt">
                <dt>Location</dt>
                <dd>Bridgetown &bull; Barbados</dd>
                <dt>Email</dt>
                <dd><a href="#">dario dot thornhill at gmail</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://twitter.com/dariothornhill" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://linkedin.com/in/dario-thornhill-74273134/" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/dariothornhill" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
               
            </ul>
        </section>
        <p className="copyright">&copy; Dario Thornhill.</p>
    </footer>
)

export default Footer
