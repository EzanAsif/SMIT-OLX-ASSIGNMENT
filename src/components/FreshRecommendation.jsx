import { blue } from '@material-ui/core/colors';
import React from 'react';
import FeaturedColData from './FeaturedColData'
import {FreshRecmCard,StartSellingCard} from './FreshRecmCard'

class FreshRecommendation extends React.Component{
    render(){
        return(
            <div className = "recm-cont">
                <div className="recm-cont-heading">
                    <h2>Fresh recommendations</h2>
                </div>
                <div className="recm-indv-container">
                        {
                        
                            FeaturedColData.map((value,index)=>{
                                if (index == 3){
                                    return <StartSellingCard />
                                }
                                else{
                                    return <FreshRecmCard key={index} imgsrc = {value.img}  price = {value.price} title = {value.title} place = {value.place}/> 
                                }
                            })
                        }
                </div>
                <div className = "load-more">
                    <a href="#home">Load More</a>
                </div>
            </div>
        )
    }
}


export default FreshRecommendation



