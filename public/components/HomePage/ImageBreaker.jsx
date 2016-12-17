import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class ImageBreaker extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  componentDidMount() {
      $('#image-breaker-window').parallax({
        imageSrc: 'images/coffee-cup-bed-bedroom.jpeg'
      });
  }

  render() {

      return (
        <div id={"image-breaker-window"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-natural-width={"1400"} data-natural-height={"900"}>
          <div class="parallax-slider">
          </div>
        </div>
    	)
  	}
}

module.exports = ImageBreaker;