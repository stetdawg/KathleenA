import React from 'react'
import { NavLink } from 'react-router-dom'
import '../scss/Sidebar.scss'



/* 
const SidebarFocus = (params) => { 
    let g = document.getElementsByClassName("sideBar");
    console.log(g);
    g.addEventListener('focus',(params) => {
        
        })
    g.addEventListener('blur', (params) => {
        
        })
}
 */


function navLocationGetter(string) {
  let nav;
    switch (string){
      case 'About':
        nav = <ul>
          <li>
              <NavLink to="/">Home</NavLink>
          </li>

        </ul> 
      break;
      case 'Galleries':
        nav = <ul>
           <li>
              <NavLink to="/">Home</NavLink>
          </li>
          <li>
              <NavLink to="/">Magnificent Theater of Art</NavLink>
          </li>
          <li>
              <NavLink to="/">Decorative Accessories</NavLink>
          </li>
          <li>
              <NavLink to="/">Sculpture</NavLink>
          </li>
          <li>
              <NavLink to="/">Abstracts</NavLink>
          </li>
          <li>
              <NavLink to="/">Gifts and Sundries</NavLink>
          </li>
        </ul> 
      break;
      case 'Specialties':
        nav = <ul>
           <li>
              <NavLink to="/">Home</NavLink>
          </li>
          <li>
              <NavLink to="/">Genesis</NavLink>
          </li>
          <li>
              <NavLink to="/">Humanity</NavLink>
          </li>
          <li>
              <NavLink to="/">Worship</NavLink>
          </li>
          <li>
              <NavLink to="/">Life</NavLink>
          </li>
          <li>
              <NavLink to="/">Art on Monday</NavLink>
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
  return nav;
}


class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      navLocation: '', 
    }
  }

  componentDidMount() {
    this.setState({
      navLocation: this.props.useLoc,
    })
  }

  componentDidUpdate(prevProps) {
   if( prevProps.useLoc !== this.props.useLoc){
    this.setState({
      navLocation: this.props.useLoc,
    }) }
  }


  render() {    
    console.log(1)

    var curnav;
    curnav = navLocationGetter(this.state.navLocation);
      return (
      <div className="sideBar">
      {/* LOGO */}
      <svg 
        width="17vw" 
        height="12vh" 
        className="logo" 
        xmlns="http://www.w3.org/2000/svg">
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
                        x="50" 
                        y="50%" 
                        dy="1em">A. WILSON</tspan>
                    <tspan 
                        x="50" 
                        y="50%">KATHLEEN</tspan>
                </text>
          </g>
      </svg>

      {/* NAV */}
          <nav className="navBar">
          {curnav }
          </nav>
  
      {/* EMAIL */}
          <div className="bx1" id="email-capture">
              <p>Please join our mailing list today! We'll keep in touch and keep you informed.</p>
            <span>
              <label htmlFor="email">Email:</label>
                <input type="text" id=""/>
              <label htmlFor="name">Name:</label>
                <input type="text" id=""/> 
            </span>
          </div>
      </div>
  
  
    )
  }
} 


export default Sidebar;