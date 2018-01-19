import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var posts = [{
  title: 'Dinos rule!',
  content: 'We are so neat',
  author: 'T-Rex; King of Dinos',
  comments: ['Eh, dinos are okay', 'Yeah, go dinos']
}, {
  title: 'So offended',
  content: 'I am from way, way longer ago than these young dinos. Jurassic rules, cretaceous sucks!',
  author: 'Stegasaurus',
  comments: ['Cool it', 'Who cares, bro', 'Triassic or nothing!']
}];



ReactDOM.render(<Post posts={posts} />, document.getElementById('root'));
registerServiceWorker();