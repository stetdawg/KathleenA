import React from 'react';
import Landing from './components/landing.js';
import Home from './components/Home.js';
import Sidebar from './components/Sidebar.js';
import About from './components/About.js';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home/>
  },
  {
    path: "/Landing",
    main: () => <Landing/>,
  },
  {
    path: "/About",
    main: () => <About/>,
  },
  {
    path: "/Galleries",
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/Specialties",
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/Events",
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/Blog",
    main: () => <h2>Shoelaces</h2>
  },
];

function App(){
  var location = useLocation();
  var history = useHistory();
  let path = location.pathname;
  let e = path.replace('/', '');
      return (

        <div className="App"> 
          <Sidebar useLoc={e} prevLoc={location}/> 
        <div className="content">
          <Switch>
            {routes.map((route,index,)=>(
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main/> }
                />))}
          </Switch>
        </div>
      </div>
  )
}

export default App;
