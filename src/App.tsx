import React from 'react';
import './App.css';
import { Home, Curriculum } from './app/components';
import { CssBaseline } from '@material-ui/core';
import { Route } from 'react-router-dom';
import Portfolio from './app/components/Portfolio';
// import Contacto from './app/components/Contacto';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/curriculum" component={Curriculum} />
      <Route path="/portfolio" component={Portfolio} />
      {/* <Route path="/contacto" component={Contacto} /> */}
    </React.Fragment>
  );
}

export default App;
