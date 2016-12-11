import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll'
import Navigation from './Navigation/navigation';
import Landing from './Landing/Landing';
import Technology from './Technology';
import StarryBreaker from './Breakers/StarryBreaker';
import ReviewSection from './Review/ReviewSection';
import MissionSection from './Mission/MissionSection';
import Footer from './Footer';
import Guarantee from './Guarantee';

class Home extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  
  componentDidMount() {
    

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
          <MissionSection/>
          <StarryBreaker/>
          <Guarantee/>
          <Technology/>
          <ReviewSection/>
          <Footer/>
        </div>
        
    );
  }
}

module.exports = Home;