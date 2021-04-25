import React, { PureComponent } from 'react'
import '../scss/Gallery.scss'
import '../scss/Home.scss'




const importAll = (r) => r.keys().map(r);
let b = importAll(require.context('../assets', false, /\.webp/));

let map = b.map((images,index) =>
  <div 
    className="bx" 
    id={"pic" + `${index}`} 
    key={Math.random()}>
      <img 
         src={images} 
        alt={"image" + `${index}`}/>
  </div>
);


const resizer = (map) =>null


export class Home extends PureComponent {
  componentDidMount(){
  }
  render() {    console.log(2)

    return (
  <div className="home">
    <div className="bx" id="hero">
          <div id="header1">Art of the Spirit</div>
          <div id="header2">The Official Art Gallery of Kathleen Atkins Wilson  </div>
          <div id="header3">Divinely Inspired - Diaspora Essence</div>
          <div id="header4">shipping worldwide since 1984</div>
          <div id="header5">Culture Beauty Life</div>
          <div id="header6"></div>
    </div>
    <div id="Gallery">                    
      {map}
    </div>                       
  </div>

)
}
}


export default Home;

