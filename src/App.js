import React, { Component } from 'react';
import logo from './logo.svg';
import Author from './Author.js';
import Comment from './Comment.js';
import './App.css';


class Post extends Component {
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
    const allPosts = this.props.posts.map(p => {
      return <div>
          <h2 className="Title">{p.title}</h2>
           <Author author={p.author} />
            <p className="Post-intro">
              {p.body}
            </p>
          <h3>Comments:</h3>
          <Comment comments={p.comments} />
          <br />
          <br />
          </div>
    });


    return (
      <div className="Post">
        <header className="Post-header">
          <h1 className="Post-title">Dino Blog</h1>
            <p className="Post-intro">
              All the latest and greatest things from 65 million years ago
            </p>
        </header>
        <h3>On a scale of 1-10 this is how I feel</h3>
        <p>Current mood: {this.state.moodPoints}</p>
        <button onClick={(e)=> this.increaseMood(e)}></button>
          {allPosts}
        <hr />
      </div>
    );
  }
}



export default Post;
