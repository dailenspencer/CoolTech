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
        imageSrc: 'https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=100 100w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=200 200w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=300 300w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=320 320w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=400 400w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=500 500w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=600 600w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=640 640w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=700 700w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=750 750w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=768 768w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=800 800w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=900 900w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1000 1000w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1024 1024w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1080 1080w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1100 1100w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1152 1152w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1200 1200w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1242 1242w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1300 1300w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1400 1400w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1440 1440w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1442 1442w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1500 1500w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1536 1536w, https://casper.imgix.net/home/homepage-hero-3.jpg?auto=compress&fit=crop&w=1600 1600w'
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