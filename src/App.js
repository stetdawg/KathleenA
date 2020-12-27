import React from 'react';
import reactDOM from 'react-dom';
import Landing from './components/landing.js';
import Home from './components/Home.js';
import Sidebar from './components/Sidebar.js';
import About from './components/About.js';
import { Switch, Route, useLocation } from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () =><Sidebar/>,
    main: () => <Home/>
  },
  {
    path: "/Landing",
    sidebar: () => null,
    main: () => <Landing/>,
  },
  {
    path: "/About",
    sidebar: () => <Sidebar navLocation='About'/>,
    main: () => <About/>,
  },
  {
    path: "/Galleries",
    sidebar: () => <Sidebar />,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/Specialties",
    sidebar: () => <Sidebar />,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/Events",
    sidebar: () => <Sidebar />,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/Blog",
    sidebar: () => <Sidebar />,
    main: () => <h2>Shoelaces</h2>
  },
];


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       navLocation: '' , 
    }
  }
  componentDidMount( ){
    
  }

stateGetter(location){
  this.setState({
    navLocation: location,
  })
}
  render(){          

    return (
      <div className="App">
  
     <Sidebar/>
   
      <div className="content">
        <Switch>
          {routes.map((route,index,)=>(
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main/>}
              />

          ))
          }
        </Switch>
      </div>
    </div>
    )
  }
 
}

export default App;
