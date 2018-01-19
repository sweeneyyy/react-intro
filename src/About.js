import React, { Component } from 'react';
import './App.css';

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      moodPoints: 1,
      zipcode: '',
      weather: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  increaseMood(e){
    if(this.state.moodPoints <=9){
        this.setState({moodPoints: this.state.moodPoints +1})
    }else{
        this.setState({moodPoints: 1})
    }
  }

  handleChange(event) {
    this.setState({zipcode: event.target.value})
    console.log('Your zip code is' + this.state.zipcode)
    this.handleSubmit(event.target.value)
  }


  handleSubmit(change){
    let base = this

    let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=' + change + '&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98';
    fetch(weatherApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
        base.setState({ weather: json.main.temp });
      }).catch((ex) => {
        console.log('Error happened!', ex);
      })

  }
    
  render() {
    let weatherInfo = this.state.weather;

    return (
      <div>
        <h1>About</h1>
          <form onSubmit={this.handleSubmit}>
            <p>{weatherInfo}</p>
             <label>
                Please enter your zip code for the weather:
               <input type="text" value={this.state.zipcode} onChange={this.handleChange} />
             </label>
              <input type="submit" value="Get forecast!" />
          </form>

          <br />
          <h3>On a scale of 1-10 this is how I feel</h3>
            <p>Current mood: {this.state.moodPoints}</p>
            <button onClick={(e)=> this.increaseMood(e)}>elevate</button>
      </div>
      );
  }
}

export default About;
 


