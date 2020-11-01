import React from 'react';
// import Form from 'react-bootstrap/Form';
import Firstb from '../images/hero_bg_pk.jpg'
import Secb from '../images/oppo-ad.png'
// import '../App.css'

class Banner extends React.Component{
    render(){
        return(
            <div className="home-page-banner">
                <div className="firstBanner">
                    {/* <img src={Firstb} alt=""/> */}
                </div>
                <div className="secondBanner">
                    {/* <img src={Secb} alt=""/> */}
                </div>
            </div>
        )
    }
}

export default Banner;