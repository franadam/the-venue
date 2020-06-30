import React from 'react';
import Header from './components/header/Header';
import Container from './components/container/Container'
import Footer from './components/footer/footer'

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
