import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll'
import Navigation from './Navigation/navigation';
import Landing from './Landing/Landing';
import ShopSection from './Shop/ShopSection';
import StarryBreaker from './Breakers/StarryBreaker';
import ReviewSection from './Review/ReviewSection';
import AboutSection from './About/AboutSection';
import Footer from './Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  
  
  componentWillUnmount() {
      [].forEach.call(document.querySelectorAll('.parallax-mirror'),function(e){
        e.parentNode.removeChild(e);
      });
  }

  render() {
    return (
        <div id="MainBody">
          <Navigation/>
          <Landing/>
          <ShopSection/>
          <StarryBreaker/>
          <ReviewSection/>
          <AboutSection/>
          <Footer/>
        </div>
        
    );
  }
}

module.exports = Home;