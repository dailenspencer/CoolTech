import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll'
import Navigation from '../Navigation';
import Footer from '../Footer';
import {FAQItems} from './FAQItems.js';

class FAQ extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  
  componentDidMount() {
    $(window).scrollTop(0,0);
  }
  componentWillUnmount() {
      
  }

  buildFAQs() {
    console.log(FAQItems);
    var items = FAQItems.map(function(item){
      return (
           <div className="FAQItem">
            <h1>{item.question}</h1>
            <p1>{item.answer}</p1>
          </div>
        )
    })
    return items
  }

  render() {
    var items = this.buildFAQs();
    console.log(items);
    return (
        <div id="MainBody">
          <Navigation/>
            <div id="FAQ">
               <h1 id="FAQTitle">FAQ</h1>
               <div id="FAQHolder">
                {items}
               </div>
            </div>
          <Footer/>
        </div>
        
    );
  }
}

module.exports = FAQ;