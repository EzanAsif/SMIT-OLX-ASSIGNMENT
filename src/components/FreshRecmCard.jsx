import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FeaturedColData from './FeaturedColData'

function FreshRecmCard(props) {
    return (
        // <div>
            <div class="card p-3 w-75 fresh-rec-card">
       
        
       <div className="img">
       
        <img className="card-img-top " style={{width:'110px', heigh:'180px',alignItems:'center'}} src={props.imgsrc} alt="Bologna"/>
        <FavoriteBorderIcon />  
           </div> 
        
        <div className="card-body">
            <h4 className="card-title">{props.price}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
            <p className="card-text"><small style={{fontSize:'11px',float:'left',marginTop:'23px',marginLeft:'0px'}}>{props.place}</small></p>
            <p className="card-text"><small style={{fontSize:'11px',float:'right',marginTop:'15px',marginLeft:'30px'}}>TODAY</small></p>
          
        </div>
        </div>
        // </div>
    )
}

function StartSellingCard(){
    return(
           <div className="col p-3 w-75 start-selling">
                <div className="card-body">
                    <h4 className="card-title">Want to see your stuff here?</h4>
                    <p className="card-text">Make some extra cash by selling things in your community. GO on, it's quick and easy</p>
                    <a href="#home" className = "card-text-button">Start selling</a>
                </div>
            </div>
        // </div>
    )
}


export {FreshRecmCard,StartSellingCard}