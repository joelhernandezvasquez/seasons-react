import React from "react";
import ReactDom from "react-dom";


class SeasonDisplay extends React.Component{
 
   seasonConfig = {
     
      summer:{
         text:"Burr, its chilly",
         iconName:"sun"
      },
      winter:{
         text:"let's hit the beach",
         iconName:"snowflake" 
      }
   };
   
   getSeason = (lat,month) =>{

      if(month>=3 && month<=8)
      {
         return lat > 0 ? "summer" :"winter";
      }

      else
      {
         return lat < 0 ? "winter": "summer"
      }

   }

 render(){
    
   const season = this.getSeason(this.props.lat,new Date().getMonth())
   const {text,iconName} = this.seasonConfig[season];// destructuring the config object

   return(
     <div>
        <i className={`${iconName} icon`}/>
        <h1> {text}</h1>
        <i className={`${iconName} icon`}/>
     </div>
    );
 }


       
}

export default SeasonDisplay;