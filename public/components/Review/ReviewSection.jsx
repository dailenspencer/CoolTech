import React from 'react';
import ReactDOM from 'react-dom';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }

  render() {
    var reviewText = "Ali Dakota was created on Kauai by founder and artist Jill Smith. She came across the art of eco-printing, the process of imprinting Mother Nature’s flora onto fabrics. She instantly knew this was a form of art she could take with her while she traveled the world with her family. Through thoughtful design and the alchemy of the natural world, each piece Jill creates is one-of-a-kind."
    return (
        <div id="ReviewSection">
          <h1 id="ReviewTitle">Join The Community</h1>
          <div className="ReviewHolder">
            <div className="Review">
              <div className="ReviewImage" style={{'backgroundImage':"url('images/girlsface.jpg')"}}></div>
              <h1>Mary Ann</h1>
              <p1>{reviewText}</p1>
            </div>
            <div className="Review">
              <div className="ReviewImage" style={{'backgroundImage':"url('images/girlsface.jpg')"}}>
              </div>
              <h1>Mary Ann</h1>
              <p1>{reviewText}</p1>
            </div>
            <div className="Review">
              <div className="ReviewImage" style={{'backgroundImage':"url('images/girlsface.jpg')"}}>
              </div>
              <h1>Mary Ann</h1>
              <p1>{reviewText}</p1>
            </div>
          </div>
          <div id="ViewReviews">Read More Reviews</div>
        </div>
        
    );
  }
}

module.exports = ReviewSection;