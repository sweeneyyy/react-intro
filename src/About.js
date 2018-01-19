import React, { Component } from 'react';
import './App.css';

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      moodPoints: 1
    }
  }

  increaseMood(e){
    if(this.state.moodPoints <=9){
        this.setState({moodPoints: this.state.moodPoints +1})
    }else{
        this.setState({moodPoints: 1})
    }

    this.state.moodPoints<=9?this.setState({moodPoints: this.state.moodPoints +1}):this.setState({moodPoints: 1})

  }
    render() {

    return (
      <div>
        <h1>About</h1>
          <p></p>
          <h3>On a scale of 1-10 this is how I feel</h3>
              <p>Current mood: {this.state.moodPoints}</p>
            <button onClick={(e)=> this.increaseMood(e)}>elevate</button>

      </div>
      );
  }
}

export default About;


