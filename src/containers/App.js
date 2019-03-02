import React, { Component } from 'react';
import '../styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import UsersPage from './UsersPage';
import {Helmet} from 'react-helmet';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>React Awesome Boilerplate</title>
          </Helmet>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/users" exact component={UsersPage} />
        </div>
      </Router>
    );
  }
}

export default App;
