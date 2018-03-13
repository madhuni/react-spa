import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import NavigationHeader from './components/NavigationHeader/NavigationHeader';
import Aux from './hoc/Aux';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Staff from './pages/Staff/Staff';

class App extends Component {

  render() {
    return (
      <div id="app">
        <HashRouter>
          <Aux>
            <NavigationHeader />
            <div className="page-container">
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/staff' component={Staff} />
            </div>
          </Aux>
        </HashRouter>
      </div>
    );
  }
}

export default App;