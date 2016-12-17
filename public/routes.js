import React from 'react'
import {Route, IndexRoute, Router, browserHistory} from 'react-router'


import App from './components/App'
import Home from './components/HomePage/Home'
import Checkout from './components/CheckoutPage/Checkout'
import FAQ from './components/FAQPage/FAQ';
import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import hashHistory  from 'react-router'



export default (
	<Router history={hashHistory}>
  		<Route path="/" component={App}>

  			<IndexRoute component={Home}/>
  			<Route path="/OurMission" component={Home}/>
  			<Route path="/Reviews" component={Home}/>
  			
  			<Route path="/Checkout" component={Checkout}/>
  			<Route path="/FAQ" component={FAQ}/>
  			<Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
  		</Route>
    </Router>
)