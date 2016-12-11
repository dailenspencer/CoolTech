import React from 'react';
import { browserHistory } from 'react-router'
import * as jqueryHelpers from '../../helpers/jqueryHelpers';

class Navigation extends React.Component {
	constructor(props) {
	    super(props);
	   
	    this.state = {
	      screenWidth: $(document).width()
	    };
	}

	componentDidMount() {
		var that = this
	    window.addEventListener("resize", function() {
	      that.setState({screenWidth:$(document).width()})
	    })
	}

	scrollToShop() {
		$('html,body').animate({
    		scrollTop: $("#BookAnEvent").offset().top},
    	2000);
	}

	scrollToReviews() {
		$('html,body').animate({
    		scrollTop: $("#Events").offset().top},
    	2000);
	}

	handleCartClick() {
		browserHistory.push('/Checkout');
	}

	handleMobileNavClick() {
		this.handleCloseMobileNav();
	}
	handleMobileMenuClick() {
		$("#MobileNavSlideOut").animate({
      left:'0px',
    }, 200, function() {
      // Animation complete.
    });
	}
  handleCloseMobileNav() {
    $("#MobileNavSlideOut").animate({
      left:'-200px',
    }, 200, function() {
      // Animation complete.
    });
  }
	getMainNav() {
		return (
			<div id="NavBar">
				<h1 id="NavBarTitle">CoolTech</h1>
				<div id="NavBarNavigation">
					<h2 onClick={() => scrollToShop()}>Shop</h2>
					<h2 onClick={() => scrollToAbout()}>About</h2>
					<h2 onClick={() => scrollToReviews()}>Reviews</h2>
				</div>
				<div id="NavBarRight">
					<div id="CountryImage">
					<img src=""/>
					</div>
					<div id="NavBarPhone">
						<h1>+1 850-276-9677</h1>
					</div>
					<div id="NavShoppingCart" onClick={() => this.handleCartClick()}>
						<img src="/images/shopping-cart.png"/>
					</div>
				</div>
			</div>
		)
	}
	getMobileNav() {
		return (
			<div id="NavBar">
			      <img id="MobileNavMenuButton" onClick={() => this.handleMobileMenuClick()} src="images/menu-button.png"/>
			      <h1 id="MobileNavBarTitle">CoolTech</h1>
				    <img id="MobileNavShoppingCart" src="images/shopping-cart.png" onClick={() => this.handleCartClick()}/>
			    <div id="MobileNavSlideOut">
		        <h1 onClick={() => this.handleMobileNavClick("/")}>HOME</h1>
		        <h1 onClick={() => this.handleMobileNavClick("/shop")}>SHOP</h1>
		        <h1 onClick={() => this.handleMobileNavClick("/contact")}>CONTACT</h1>
		        <img src="images/cancel.png" onClick={() => this.handleCloseMobileNav()}/>
				  </div>
			</div>
		)
	}
	   
	handleMobileNavClick(view) {
    	this.changeView(view);
    	this.handleCloseMobileNav();
  	}

    handleMobileMenuClick() {
		$("#MobileNavSlideOut").animate({
	    	left:'0px',
	    }, 200, function() {
	    	// Animation complete.
	    });
  	}
	
	handleCloseMobileNav() {
		$("#MobileNavSlideOut").animate({
			left:'-200px',
		}, 200, function() {
			// Animation complete.
		});
	}

	render() {
	    var navigation = this.getMainNav()
	    if(jqueryHelpers.isMobile() || this.state.screenWidth <= 790) {
	      navigation = this.getMobileNav();
	    }
	    return (
	        navigation
	    )
	}
 };

 module.exports = Navigation;