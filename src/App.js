import React, { Component } from 'react';
import './App.css';
//importing react router
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//importing page components
import Home from './Home.js';
import About from './About.js';
import Blog from './Blog.js';
import Author from './Author.js';
import Comment from './Comment.js';
import FavoriteMovie from './FavoriteMovie.js';
import FavoriteFood from './FavoriteFood.js';


class Post extends Component {

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
      <Router>
        <div className="Post">
          <nav>
            <Link to="/">HOME</Link>{' '}
            <Link to="/blog">BLOG</Link>{' '}
            <Link to="/about">ABOUT</Link>{' '}
            <Link to="/favoritemovie">MOVIE</Link>{' '}
            <Link to="/favoritefood">FOOD</Link>{' '}
          </nav>
          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={ () => <Blog post={allPosts} />} />
          <Route exact path="/favoritemovie" component={FavoriteMovie} />
          <Route exact path="/favoritefood" component={FavoriteFood} />        
          
        </div>
      </Router>
    );
  }
}



export default Post;
