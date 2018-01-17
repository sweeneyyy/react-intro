import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Post extends Component {
  render() {
    let authors = [
      <Author name={this.props.authors[0]} />,
      <Author name={this.props.authors[1]} />,
      <Author name={this.props.authors[2]} />
    ]
    return (
      <div className="Post">
        <h1>{this.props.title}!</h1>
          <p>{this.props.body}</p>
        <h2>Comments:</h2>
          <p>{this.props.comments[0]}</p>
      </div>
    );
  }
}


class Author extends Component {
  render() {
    return (
      <div className="Author">
        <p>Written by</p>
      </div>
    );
  }
}


export default Post;
