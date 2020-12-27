import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import '../scss/Gallery.scss'




const importAll = (r) => r.keys().map(r);
let b = importAll(require.context('../assets', false, /\.webp/));

let map = b.map((images,index) =>
  <div 
    className="bx" 
    id={"pic " + `${index}`} 
    key={Math.random()}>
      <img 
        src={images} 
        alt={"image" + `${index}`}/>
  </div>
);


const resizer = (map) =>null


export class Home extends Component {
  componentDidMount(){
  }
  render() {
    return (
  <div className="home">
    <div className="bx" id="hero">
        Hero
    </div>
    <div id="Gallery">                    
      {map}
    </div>                       
  </div>

)
}
}


export default Home;

