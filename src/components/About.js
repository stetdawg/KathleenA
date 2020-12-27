import React, { Component } from 'react'

 class About extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
   }
   
    render() {
        return (
            <div>
                Yo
                {console.log(this.props.location)}
            </div>
        )
    }
}

export default About
