import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Navigation from '../Navigation';
import Footer from '../Footer';

class Contact extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  componentDidMount() {
      $('#contact-window').parallax({
        imageSrc: 'images/bikeinroom.jpeg'
      });
      $(window).scrollTop(0,0);
      setTimeout(function() {
        $('#ContactItemAddress p1').css('white-space','normal');
      },0)
      

  }
  componentWillUnmount() {
      [].forEach.call(document.querySelectorAll('.parallax-mirror'),function(e){
        e.parentNode.removeChild(e);
      });
  }

  render() {
    var meetTheCreatorText = "";
      return (
        <div id="MainBody">
          <Navigation/>
            <div id="ContactPage">
              <div id={"contact-window"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-image-src={"images/rage.jpg"} data-natural-width={"1400"} data-natural-height={"900"}>
                <div class="parallax-slider">
                  <div id="ContactUsHolder">
                    <h1>How Can We Help?</h1>
                  <div className="ContactItem">
                    <img src="images/smartphone.png"/>
                    <p1 style={{'lineHeight':'55px'}}>(850)-276-9677</p1>
                  </div>
                  <div className="ContactItem">
                    <img src="images/mail.png"/>
                    <p1 style={{'lineHeight':'55px'}}>support@cooltechbedding.com</p1>
                  </div>
                  <div className="ContactItem" id="ContactItemAddress">
                    <img src="images/map_2.png"/>
                    <p1>3516 dragons ridge road, Panama City Beach, FL</p1>
                  </div>
                  </div>
                </div>
              </div>
              <div className="arrow bounce" id="arrowbounce"></div>
            </div>
          <Footer/>
        </div>
    	)
  	}
}

module.exports = Contact;