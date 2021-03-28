import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import SelectedBeast from './selectedBeast/SelectedBeast';
import Footer from './footer/Footer';
import data from './constants/data.json';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // TODO: bind methods
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.displayFlipper = this.displayFlipper.bind(this);
    // TODO: Store in current state
    this.state = {
      selectedBeast: {},
      display: false,
    };
  }

  handleSelectChange(title) {
    let beast = data.find(item => item.title === title);
    this.setState({
      selectedBeast: beast,
      display: !this.state.display,
    });
  }

  displayFlipper() {
    this.setState({
      display: !this.state.display,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SelectedBeast beast={this.state.selectedBeast} display={this.state.display} displayFlipper={this.displayFlipper}/>
        <Main handleSelectChange={this.handleSelectChange} data={data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
