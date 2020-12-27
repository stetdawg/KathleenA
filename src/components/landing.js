import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../scss/Landing.scss'
import video from '../assets/0000-2000.webm'
import img from '../assets/0000.png'
import { Route } from 'react-router-dom'
import Home from './Home'

const some=()=><Route exact path="/">
    <Home/>
</Route>

class Landing extends Component { 
constructor(props) {
    super(props)

    this.state = {
         //account cookie information
         imgArray: []
    }
}
	
componentDidMount() {
	//load js animation
	return video
}

componentWillUnmount() {
    //destroy js animation
}

    render() {
    return (
    <div className="landing-page">
        <video playsInline autoPlay muted loop poster={img} id="bgvid">
            <source src={video} type="video/webm"/>
        </video>
        <div className="welcome" >  
            <h1 className="titleText">Art of the Spirit</h1>
            <h2 className="titleText">The Official Art Gallery of Kathleen Atkins Wilson</h2>
            <h4 className="titleText">Culture Beauty Life</h4>
        </div>
    </div>
    )}
}


export default Landing