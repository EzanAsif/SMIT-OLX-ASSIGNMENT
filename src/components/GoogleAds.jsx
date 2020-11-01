import React from 'react'


function GoogleAds(props) {
    return (
            <div className = "ad">
                <a href="#">
                    <img src={props.img} alt=""/>
                </a>
            </div>
    )
}

export default GoogleAds