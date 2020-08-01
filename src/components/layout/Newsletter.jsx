import React, {Component} from 'react'

export default class Newsletter extends Component {
  render() {
    return (
      <div className="subscribe-container" id="mc_embed_signup">
        <form action="https://finance.us17.list-manage.com/subscribe/post?u=364c817c91a8f54732894b7c6&amp;id=4462c6d940" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <h1>Register for Alpha Launch</h1>
            <div className="field-wrapper">
              <input type="email" defaultValue="" name="EMAIL" className="email-input" id="mce-EMAIL" placeholder="Your Email Address" autoComplete="off" required />
              <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                <input type="text" name="b_364c817c91a8f54732894b7c6_4462c6d940" tabIndex="-1" defaultValue=""/>
              </div>
              <div className="clear">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="subscribeButton"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
