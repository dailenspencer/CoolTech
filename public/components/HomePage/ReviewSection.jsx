import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class ReviewSection extends React.Component {
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

  handleMouseEnter() {
    $( "#image-breaker-window button h2" ).animate({
      "padding-right":"20px"
    }, 250, function() {
    });
  }

  handleMouseLeave() {
    $( "#image-breaker-window button h2" ).animate({
      "padding-right":"0px"
      }, 250, function() {
    });
  }

  render() {
    var coolTech = "CoolTech's"
    var exp = "experience . . . ."

    var quote = "\"CoolTech's groundbreaking technology has redifined our sleeping " + exp + "\"";
   
      return (
        <div id={"image-breaker-window"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-natural-width={"1400"} data-natural-height={"900"}>
          <div class="parallax-slider">
            <h1>"{coolTech} groundbreaking technology has redefined our sleeping <br/>experience . . . ."</h1>
            <button onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()}><h2>Read Reviews</h2><img src="images/thinarrow.png"/></button>
          </div>
        </div>
    	)
  	}
}

module.exports = ReviewSection;