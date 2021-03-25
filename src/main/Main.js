import React from 'react';
import data from '../constants/data.json';

import HornedBeasts from '../hornedBeasts/HornedBeasts';
import { CardColumns } from 'react-bootstrap';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasts = [];
    data.forEach((item, index) => {
      beasts.push(
        <HornedBeasts
          key={index}
          name={item.title}
          title={item.title}
          imgUrl={item.image_url}
          description={item.description}
          type={item.keyword}
          horns={item.horns}
        />
      );
    });
    return <main><CardColumns>{beasts}</CardColumns></main>;
  }
}

export default Main;
