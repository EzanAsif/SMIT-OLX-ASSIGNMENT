import React from 'react';
import {NavbarW, NavbarB} from './components/navbar'
import Banner from './components/Banner'
import CardCarousel from './components/CardCarousel'
import FreshRecommendation from './components/FreshRecommendation'
import LastSec from './components/LastSec'
import GoogleAd from './components/GoogleAds'
import Footer from './components/Footer'
import ScrollArrow from './components/checkScrollTop'
// import Login from './components/LoginPopup'
import './App.css'
import 'bootstrap/dist/js/bootstrap.js';

// import $ from 'jquery';
// import Popper from 'popper.js';
// import $ from 'jquery';

class App extends React.Component{

  render(){
    return(
    <div className = "main-wrapper">
      <ScrollArrow/>
      <div className = "navbar-main">
        <NavbarW />
        <NavbarB />
      </div>
      {/* <div className = "login">
        <Login/>
      </div> */}
      <div className="banner">
        <Banner/>
      </div>
      <div className = "card-carousel">
        <CardCarousel/>
      </div>
      <div className = "fresh-recm-section">
        <FreshRecommendation/>
      </div>
      <div className = "google-ad">
        <GoogleAd img = "https://s2.adform.net/Banners/41342389/41342389.png?bv=2"/>
      </div>
      <div className = "last-section">
        <LastSec/>
      </div>
      <div className = "footer">
        <Footer/>
      </div>git
    </div>
    )
  }
}

// whenever we will use map we need to give a key prop in thos case it will be index


export default App;
