import React from "react";
import ReactDom, { render } from "react-dom";
import SeasonDisplay from '../src/SeasonDisplay';


class App extends React.Component{

   
  /*  constructor(props){ // initializing the state inside the constructor
      super(props);
      
   } */

   state={
      lat:null,
      error:" "
   }

   componentDidMount()
   {
      window.navigator.geolocation.getCurrentPosition(
         position => {
            this.setState({lat:position.coords.latitude})
         },
         err => {
            this.setState({errorMessage: err.message})
         }
      )
   }
   render(){
       // function to get the current location of an user.
        if(this.state.errorMessage && !this.state.lat)
        {
           return <div> Error:{this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage  && this.state.lat )
        {
           return <SeasonDisplay latitude = {this.state.lat} />
        }

        return <div>Loading...</div>
         
   
   }
  
}

ReactDom.render(<App />, document.querySelector("#root"));
