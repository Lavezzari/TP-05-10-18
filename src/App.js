import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './modules/Home';
import Subs from './modules/Subs';
import LookFor from './modules/LookFor';
import About from './modules/About';


class App extends Component {

  render() {

    return (
      <div className="App">
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/subs" component={Subs} />
            <Route path="/LookFor" component={LookFor} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
		<div className="My_Footer">

       <footer>© 2018 Copyright:Nico Lavezzari
    </footer>
      </div>
      </div>
    );
  }
}

export default App;
