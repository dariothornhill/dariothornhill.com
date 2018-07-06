import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import photo from '../assets/images/photo.jpeg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Dario</h2>
                </header>
                <p>I am a keen problem solver and a computer science enthusiast. I have experience in several programming languages and programming paradigms and I am very quick to learn new languages, methodologies and technologies.Despite being a self described geek, I am also quite sociable and generally bring soft skills to the working environment which contribute to excellent teamwork.</p><ul className="actions">
                  <li><a href="https://linkedin.com/in/dario-thornhill-74273134" target="__blank" className="button">Learn More</a></li>
                </ul>
              </div>
              <span className="image"><img src={photo} alt="portrait" /></span>
            </div>
          </section>

          <section id="skills" className="main special">
            <header className="major">
              <h2>Skills</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Coding</h3>
                <p>I write everything from bash shell scripts to fullstack javascript applications; functional code as well as markup. I'm a big fan of automation and infrastructure as code.</p> 
                <p>Having a strong foundation in programming concepts makes it easy to work in different languages easily. If you want your concepts expressed in a way computers can execute, I got you.</p>
              </li>
              <li>
                <span className="icon major style3 fa-gear"></span>
                <h3>Debugging</h3>
                <p>You can solve any challenge in a system once armed with a model of the mechanisms at work, and by exercising discipline in gathering information to refine this model.</p><p> You can usually find me going through the cycle of separating facts from assumptions and devising methods to (in)validate those assumptions to generate new facts. Ofcourse it helps to be naturally curious and being formally trained in conducting investigations.</p>
              </li>
              <li>
                <span className="icon major style5 fa-sitemap"></span>
                <h3>Architecting</h3>
                <p>Solutions to real world challenges often involve several steps and multiple systems. Years of working with different operating systems and middle wear has transformed into experience.</p> <p>Choosing the right set of tools given your constraints and connecting them to deliver highly available, cost effective and fault tolerant solutions is something I can do for you.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><a href="https://linkedin.com/in/dario-thornhill-74273134" className="button">Contact Me</a></li>
              </ul>
            </footer>
          </section>

          <section id="interests" className="main special">
            <header className="major">
              <h2>Interests</h2>
              <p>Like any nerd I have my habits and hobbies.<br />
             What follows is a just a few.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-flask"></span>
                <strong></strong>Science
              </li>
              <li className="style2">
                <span className="icon fa-gamepad"></span>
                <strong></strong>Gaming
              </li>
              <li className="style3">
                <span className="icon fa-tv"></span>
                <strong></strong>Sci-fi
              </li>
              <li className="style4">
                <span className="icon fa-plane"></span>
                <strong></strong>Travel
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong></strong>Success
              </li>
            </ul>
            {/* <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
    </footer>*/}
          </section>

          {/*<section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
  </section>*/}

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
