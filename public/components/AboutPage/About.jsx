import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Navigation from '../Navigation';
import Footer from '../Footer';

class About extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  componentDidMount() {
      $('#about-window').parallax({
        imageSrc: 'images/city-road-people-street.jpg'
      });
      $(window).scrollTop(0,0);
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
            <div id="About">
              <div id={"about-window"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-image-src={"images/rage.jpg"} data-natural-width={"1400"} data-natural-height={"900"}>
                <div class="parallax-slider">
                  <h1>Small Beginnings</h1>
                </div>
              </div>
              <div className="arrow bounce" id="arrowbounce"></div>
              
            </div>
          <Footer/>
        </div>
    	)
  	}
}

module.exports = About;