import React, { Component } from 'react'

export class Greet extends Component {

    date = new Date();
    hr = this.date.getHours();
    min = this.date.getMinutes();

    h2 = {
        textAlign : "center",
        marginTop : '90px',
        marginBottom : '0px'
    }

    setGreet = ()=>{
        if(this.hr >= 3 && this.hr < 12){
            return "morning"
        }
        else if(this.hr >=12 && this.hr < 17){
            return "afternoon"
        }
        else if(this.hr >=17 && this.hr < 23){
            return "evening"
        }
        else{
          return "night"
        }
      }
      

    render() {
        return(
            <div className='greet'>
                <h2 style={this.h2}>Hello sir, Good {this.setGreet()}</h2>
            </div>
        )
  }
}

export default Greet