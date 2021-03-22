import React from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css';
var hornedBeastsConstants = require('./constants/hornedBeastConstants');


class Main extends React.Component {
  render() {
    let beasts = [];
    hornedBeastsConstants.forEach(item => {
      beasts.push(<HornedBeasts name={item.title} title={item.title} imgUrl={item.image_url} description={item.description} />)
    })
    return (
    <main>
      {beasts}
    </main>)
  }
}

export default Main;