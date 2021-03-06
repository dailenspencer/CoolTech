import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll'
import Navigation from '../Navigation';
import Landing from './Landing';
import MissionSection from './MissionSection';
import ReviewSection from './ReviewSection';
import Technology from './Technology';
import Guarantee from './Guarantee';
import FooterPopup from './FooterPopup';
import Footer from '../Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  
  componentDidMount() {
    if(window.location.pathname === '/Reviews') {
      $('html,body').animate({
        scrollTop: $("#ReviewSection").offset().top - 100},
      100);
    } else if(window.location.pathname === '/OurMission') {
      $('html,body').animate({
        scrollTop: $("#MissionSection").offset().top - 100},
      100);
    }
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
          <ReviewSection/>
          <Technology/>
          <Footer/>
        </div>
        
    );
  }
}

module.exports = Home;