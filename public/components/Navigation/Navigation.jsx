import React from 'react';

export default (props) => {

const scrollToShop = () => {
	$('html,body').animate({
    	scrollTop: $("#BookAnEvent").offset().top},
    2000);
};

const scrollToAbout = () => {
	$('html,body').animate({
    	scrollTop: $("#Promotions").offset().top},
    2000);
};

const scrollToReviews = () => {
	$('html,body').animate({
    	scrollTop: $("#Events").offset().top},
    2000);
};

return (
	<div id="NavBar">
		<h1 id="NavBarTitle">CoolTech</h1>
		<div id="NavBarNavigation">
			<h2 onClick={scrollToShop}>Shop</h2>
			<h2 onClick={scrollToAbout}>About</h2>
			<h2 onClick={scrollToReviews}>Reviews</h2>
		</div>
		<div id="CountryImage">
			<img src=""/>
		</div>
		<div id="NavBarContact">
			<h1>+1 850-276-9677</h1>
		</div>
		<h1 id="NavLogInButton">Log In</h1>
		<div id="NavShoppingCart">
			<img src="/images/shopping-cart.png"/>
		</div>
	</div>
)
 };