import React, { Component } from 'react';
import './App.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shakeSpeare: ''
    }
  }

  componentDidMount(){
    let base = this

    let poemApi = 'http://ShakeItSpeare.com/api/poem'
    fetch(poemApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
        base.setState({ shakeSpeare: json.poem });
      }).catch((ex) => {
        console.log('Error happened while parsing!', ex);
      })
  }

  render() {
    let poetry = this.state.shakeSpeare;
    if(!this.state.shakeSpeare){
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
    return (
        <div className="Home">
          <h1>Home Page</h1>
            <p>We love dinosaurs...rawr</p> 
          <h3>We also love shakespeare</h3>
            <p>This is our favorite shakespeare poem:</p>
              {poetry}
        </div>
      
      );
  }
}

export default Home;