import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class StarryBreaker extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  componentDidMount() {
      // $('#starry-breaker-window').parallax({
      //   imageSrc: 'https://d195imggxbw1w0.cloudfront.net/assets/big-stars-462ad91ef271aa147ab523b5ab404ee88b06dfcc9b8b34c36fdd1ca162f6d251.png, https://d195imggxbw1w0.cloudfront.net/assets/small-stars-med-ac266248dd944f12244e7e753d52e3b3cb4f66e8eb77b767401448abecc560af.png'
      // });
      $('#starry-breaker-window').parallax({
        imageSrc: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjRr5ano83QAhWlhFQKHdBmA_AQjRwIBw&url=https%3A%2F%2Fwww.youtube.com%2Fuser%2FGoogle&psig=AFQjCNEqWEKIkhdKyvkwDiJF7kXM9IdH2g&ust=1480485202899471'
      });
  
  }

  render() {

      return (
        <div id="StarryBreaker">
          <div id={"starry-breaker-window"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-natural-width={"1400"} data-natural-height={"900"}>
            <div class="parallax-slider">
            </div>
          </div>
        </div>
    	)
  	}
}

module.exports = StarryBreaker;