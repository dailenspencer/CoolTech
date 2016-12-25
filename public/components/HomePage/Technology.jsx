import React from 'react';
import ReactDOM from 'react-dom';

class Technology extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  componentDidMount() {
      $('#Technology video')[0].play();
  }
  handleMouseEnter() {
    $( "#Technology button h2" ).animate({
      "padding-right":"20px"
    }, 250, function() {
    });
  }

  handleMouseLeave() {
    $( "#Technology button h2" ).animate({
      "padding-right":"0px"
      }, 250, function() {
    });
  }

  render() {
    return (
        <div id="Technology" >
          <video loop muted autoplay poster="https://d1mmgk36i9f3qd.cloudfront.net/images/img_design_video.jpg" class="fullscreen-bg__video">
              <source  src="https://d1mmgk36i9f3qd.cloudfront.net/videos/design-video.mp4" type="video/mp4"/>
          </video>
          <div>
            <h1>Technology. Design. Passion.</h1>
            <button onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()}><h2>Watch More</h2><img src="images/thinarrow.png"/></button>
          </div>
          
        </div>
        
    );
  }
}

module.exports = Technology;