import React from 'react';

import HornedBeasts from '../hornedBeasts/HornedBeasts';
import { CardColumns } from 'react-bootstrap';

import './Main.css';

class Main extends React.Component {
  render() {
    let beasts = [];
    this.props.data.forEach((item, index) => {
      beasts.push(
        <HornedBeasts
          key={index}
          title={item.title}
          image_url={item.image_url}
          description={item.description}
          type={item.keyword}
          horns={item.horns}
          handleSelectChange={this.props.handleSelectChange}
        />
      );
    });
    return <main><CardColumns>{beasts}</CardColumns></main>;
  }
}

export default Main;
