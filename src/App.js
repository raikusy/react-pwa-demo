import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import './prism.css';

import Contents from './components/Contents';
import Container from './components/Container';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container>
          <Contents />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
