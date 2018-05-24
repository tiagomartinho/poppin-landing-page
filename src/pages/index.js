import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import app_screen from '../assets/images/app_screen.png'
import landing_preview from '../assets/images/landing_preview.jpeg'
import EmailCaptureForm from '../components/EmailCaptureForm'
import YouTubePlayer from 'react-player/lib/players/YouTube'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>
                    A mobile app to discover what is happening in your city in
                    real-time
                  </h2>
                </header>
                <p>
                  Users upload a short duration video of their experience, other
                  users can see a list of experiences in a map and decide if
                  they want to join them. These experiences expire in a short
                  amount of time to keep the information relevant to what is
                  happening. Users can give feedback on the experience in order
                  to help improving the quality of the information. Users can
                  tag their experience and search for relevant terms.
                </p>
              </div>
              <span className="image">
                <img src={app_screen} alt="" />
              </span>
            </div>
          </section>

          <section className="special">
            <div className="player-wrapper">
              <img
                src={landing_preview}
                alt=""
                width="100%"
                max-height="683px"
              />
            </div>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Interested?</h2>
              <p>Subscribe to be the first to try "What's Poppin?"</p>
              <EmailCaptureForm />
            </header>
          </section>
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
