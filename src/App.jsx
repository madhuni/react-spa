import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import FlipMove from 'react-flip-move';
import TransitionGroup from 'react-transition-group';

import NavigationHeader from './components/NavigationHeader/NavigationHeader';
import Aux from './hoc/Aux';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Staff from './pages/Staff/Staff';

class App extends Component {

  render() {
    var style = {
      textAlign: 'center'
    };

    var pageContainerStyle = {
      padding: '0 5px'
    };

    return (
      <div id="app">
        <HashRouter>
          <Aux>
            <NavigationHeader />
            <h1 className="heading" style={style}>React Single-Page-Application</h1>
            <div className="page-container" style={pageContainerStyle}>
              <FlipMove>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/staff' component={Staff} />
              </FlipMove>
            </div>
          </Aux>
        </HashRouter>
      </div>
    );
  }
}

export default App;