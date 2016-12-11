import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }


  render() {
    return (
        <div id="Footer">
          <div id="FooterHeader">
            <h1>CoolTech</h1>
            <p1>© 2016 Treehouse Island, Inc.</p1>
          </div>
          <div id="FooterNavigation">
            <h1>About</h1>
            <h1>FAQ</h1>
            <h1>Shipping & Returns</h1>
            <h1>Refund Policy</h1>
            <h1>Risk-Free Trial</h1>
            <h1>Contact</h1>
          </div>
          <div id="FooterSocial">
            <div className="SocialHolder">
              <img src="images/twitter-logo.png"/>
            </div>
            <div className="SocialHolder">
              <img src="images/youtube.png"/>
            </div>
            <div className="SocialHolder">
              <img src="images/facebook-logo.png"/>
            </div>
            <div className="SocialHolder">
              <img src="images/google-plus-symbol.png"/>
            </div>
            <div className="SocialHolder">
              <img src="images/linkedin-logo.png"/>
            </div>
            <div className="SocialHolder">
              <img src="images/instagram-logo.png"/>
            </div>
          </div>
        </div>
        
    );
  }
}

module.exports = Footer;