import React, { Component } from 'react';
import './App.css';


class Blog extends Component {
  render() {
      return (
        <div className="Blog">
          {this.props.post}
        </div>
        )
  }

}

export default Blog;


