import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import Dropdown from 'react-bootstrap/Dropdown'
import SellButton from '../images/olxSellButton-01.png'
import Login from './LoginPopup'
// import '../App.css'
// import Autocomplete from '@material-ui/core/Select'
class NavbarW extends React.Component{
    render(){
      return(
        
            <div className="upper-nav">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
            <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="_3V9PS" fillRule="evenodd"><path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
            </Navbar.Brand>
            <div className="nav-search-component">
              <div className="upper-nav-city-picker">
                <div className="city-picker-select-box">
                  <SearchIcon />
                    <select className="custom-select" inline = "true">
                      <option value = "0">Pakistan</option>
                      <option value="1">Karachi</option>
                      <option value="2">Lahore</option>
                      <option value="3">Islamabad</option>
                      <option value="4">Rawalpindi</option>
                      <option value="5">Multan</option>
                      <option value="6">Gujrawala</option>
                    </select>
                  <KeyboardArrowDownIcon /> 
                </div>
            </div>
              <Form inline>
                <div className="upper-nav-search">
                  <FormControl type="text" placeholder="Find Cars, Mobile Phones and More" className="lg-md-2" />
                  <SearchIcon />      
                </div>            
              </Form>
            </div>
            <div className="nav-login-sell-button-component">
              <button className= "login-button"><Login/></button>
              <a href="#home" className = "sell-button">
                <img src = {SellButton} alt=""/>
              </a>
            </div>
            </Navbar>
            </div>
        
      )
    }
}

class NavbarB extends React.Component{
  render(){
    return(
      <div className="bottom-nav">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            ALL CATEGORIES
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Vehicle</Dropdown.Item>
              <ul>
                <a href="#home"><li>
                  Cars
                </li></a>
                <a href="#home"><li>
                  Tractors
                </li></a>
                <a href="#home"><li>
                  Bikes
                </li></a>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Animals</Dropdown.Item>
              <ul>
              <a href="#home"><li>
                  Cats
                </li></a>
                <a href="#home"><li>
                  Dogs
                </li></a>
                <a href="#home"><li>
                  Parrots
                </li></a>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Fashion And Beauty</Dropdown.Item>
              <ul>
              <a href="#home"><li>
                  Wedding
                </li></a>
                <a href="#home"><li>
                  Watches
                </li></a>
                <a href="#home"><li>
                  Clothes
                </li></a>
                <a href="#home"><li>
                  Make Up
                </li></a>
                <a href="#home"><li>
                  Jewellery
                </li></a>
                <a href="#home"><li>
                  Accesories
                </li></a>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Mobiles</Dropdown.Item>
              <ul>
              <a href="#home"><li>
                  Mobile Phones
                </li></a>
                <a href="#home"><li>
                  Accessories
                </li></a>
                <a href="#home"><li>
                  Tablets
                </li></a>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Furniture And Home Decoration</Dropdown.Item>
              <ul>
              <a href="#home"><li>
                  Office Household items
                </li></a>
                <a href="#home"><li>
                  Office Furniture
                </li></a>
                <a href="#home"><li>
                  Curtains And Blinds
                </li></a>
                <a href="#home"><li>
                  Rugs And Carpets
                </li></a>
                <a href="#home"><li>
                  Painting And Mirrors
                </li></a>
                <a href="#home"><li>
                  Garden and Outdoor
                </li></a>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Jobs</Dropdown.Item>
              <ul>
              <a href="#home"><li>
                  Other Jobs
                </li></a>
                <a href="#home"><li>
                  Part-time
                </li></a>
                <a href="#home"><li>
                  Domestic Staff
                </li></a>
                <a href="#home"><li>
                  Medical
                </li></a>
                <a href="#home"><li>
                  Manufacturing
                </li></a>
                <a href="#home"><li>
                  Human Resources
                </li></a>
              </ul>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <div className="popular-categories">
          <ul>
            <a href="#home"><li>Mobile Phones</li></a>
            <a href="#home"><li>Cars</li></a>
            <a href="#home"><li>Motorcycles</li></a>
            <a href="#home"><li>House</li></a>
            <a href="#home"><li>TV-Video</li></a>
            <a href="#home"><li>Tablets</li></a>
            <a href="#home"><li>Land And Plots</li></a>
          </ul>
        </div>
      </div>
    )
  }
}

// class NavM extends React.Component{
//   render(){
//     return(

//     )
//   }
// }

export {NavbarW, NavbarB}



