import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class Guarantee extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  componentDidMount() {
      
  }

  render() {
      return (
        <div id={"guarantees"} >
            <div id="GuaranteesHolder">
              <div className="guarantee">
                 <div className="guaranteeImage">
                  <img src="images/calendar.png"/>
                </div>
                <h1>No-Risk 365 Night Trial</h1>
              </div>
              <div className="guarantee">
                <div className="guaranteeImage">
                  <img src="images/trolley.png"/>
                </div>
                <h1>Free Shipping & Returns</h1>
              </div>
              <div className="guarantee">
                <div className="guaranteeImage">
                  <img src="images/clipboard.png"/>
                </div>
                <h1>10-Year Warranty</h1>
              </div>
            </div>
        </div>
    	)
  	}
}

module.exports = Guarantee;