import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class EmailCaptureForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ``,
    }
  }

  _handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg,
          })
        } else {
          this.setState({
            status: `success`,
            msg: result.msg,
          })
        }
      })
      .catch(err => {
        this.setState({
          status: `error`,
          msg: err,
        })
      })
  }

  _handleFormSubmit = e => {
    e.preventDefault()
    e.stopPropagation()

    this.setState(
      {
        status: `sending`,
        msg: null,
      },
      this._postEmailToMailchimp(this.state.email, {
        pathname: document.location.pathname,
      })
    )
  }

  render() {
    return (
      <div>
        {this.state.status === `success` ? (
          <div>Thank you! Youʼll receive your first email shortly.</div>
        ) : (
          <div>
            <form id="email-capture" method="post" noValidate>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  onChange={this._handleEmailChange}
                />
                <button onClick={this._handleFormSubmit}>Subscribe</button>
                {this.state.status === `error` && (
                  <div dangerouslySetInnerHTML={{ __html: this.state.msg }} />
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default EmailCaptureForm
