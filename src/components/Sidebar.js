import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import '../scss/Sidebar.scss'




const SidebarFocus = (params) => { 
    let g = document.getElementsByClassName("sideBar");
    console.log(g);
    g.addEventListener('focus',(params) => {
        
        });
    g.addEventListener('blur', (params) => {
        
        })
}



const navLocationGetter = (navlocation) => {

  let nav;
    switch (navlocation){

      case 'About':
        nav = <ul>
          <li>
              <NavLink to="/About">About</NavLink>
          </li>

        </ul> 
      break;

      default:
        nav = <ul>
          <li>
              <NavLink to="/About">About</NavLink>
          </li>
          <li>
              <NavLink to="/Galleries">Galleries</NavLink>
          </li>
          <li>
              <NavLink to="/Specialties">Specialties</NavLink>
          </li>
          <li>
              <NavLink to="/Events">Contact/Events</NavLink>
          </li>
          <li>
              <NavLink to="/Blog">Blog</NavLink>
          </li>
        </ul>
  }
}


class Sidebar extends React.Component {
constructor(props) {
  super(props)

  this.state = {
     navLocation: '' , 
  }
}
componentDidMount( ){
  this.setState({
    navLocation: this.props.navLocation,
  })
}


  render() {
    return (
      <div className="sideBar">
      
      <svg width="63%" height="12vh" className="logo" xmlns="http://www.w3.org/2000/svg">
          <g>
              <rect
                  width="100%" 
                  height="100%"
                  style={{fill:"black",}}/>
              <text 
                  fontFamily="Perpetua Tilting MT" 
                  fill="#B39B70" 
                  overflow="visible" 
                  x="0" 
                  y="0" 
                  fontSize="2.3vw" >
                  <tspan 
                      x="60" 
                      y="50%" 
                      dy="1em">A. WILSON</tspan>
                  <tspan 
                      x="60" 
                      y="50%">KATHLEEN</tspan>
              </text>
          </g>
      </svg>
  
          <nav className="navBar" navlocation={this.state.navLocation}>
          {navLocationGetter(this.state.navLocation)}
          
        
          </nav>
  
  
          <div className="bx1" id="email-capture">
              <p>Please join our mailing list today!
  We'll keep in touch and keep you informed.</p>
                  <label htmlFor="email">Email: </label>
                  <input type="text" id=""/>
                  <label htmlFor="name">Name: </label>
                  <input type="text" id=""/>
  </div>
      </div>
  
  
    )
  }
} 


export default Sidebar;