import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import './prism.css';

import Contents from './components/Contents';
import Container from './components/Container';
import Header from './components/Header';
import Offline from './components/Offline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Offline />
        <Contents />
      </Container>
    </React.Fragment>
  );
}

export default App;
