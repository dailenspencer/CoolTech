import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Navigation from '../Navigation';
import ShopLanding from './ShopLanding';
import Footer from '../Footer';

class Shop extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  render() {
    return (
        <div id="Shop">
          <Navigation/>
          <ShopLanding/>
          <Footer/>
        </div>
        
    );
  }
}

module.exports = Shop;