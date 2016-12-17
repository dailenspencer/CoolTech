import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class Landing extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  componentDidMount() {
      $('#landing-window').parallax({
        imageSrc: 'images/girlonbed.jpeg'
      });
  }


  render() {

      return (
        <div id="Landing">
          <div id={"landing-window"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-image-src={"images/rage.jpg"} data-natural-width={"1400"} data-natural-height={"900"}>
            <div class="parallax-slider">
            </div>
          </div>
          <div className="arrow bounce" id="arrowbounce"></div>
        </div>
    	)
  	}
}

module.exports = Landing;