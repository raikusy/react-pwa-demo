import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import './prism.css';

import Contents from './components/Contents';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Contents />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
