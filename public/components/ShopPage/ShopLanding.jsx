import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

class ShopLanding extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  render() {
    return (
        <div id="ShopLanding">
          <div id="ShopLandingGallery"></div>
          <div id="ShopLandingDetails">
            
          </div>
        </div>
        
    );
  }
}

module.exports = ShopLanding;