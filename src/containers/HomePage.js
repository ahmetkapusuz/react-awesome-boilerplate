import React, { Component } from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

class HomePage extends Component {

  render () {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Link to='/about'>About Page</Link>
        <Link to='/users'>Users Page</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }

}

export default HomePage;
