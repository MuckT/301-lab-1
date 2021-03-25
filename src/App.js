import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
