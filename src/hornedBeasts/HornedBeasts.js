import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './HornedBeast.css';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteCount: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      voteCount: state.voteCount + 1
    }));
  }

  render() {
    return (
      <Card onClick={this.handleClick} className="mb-2 card bg-light text-dark text-center" style={{ width: '100%' }}>
        <Card.Img alt={this.props.name + ' image'} variant="top" src={this.props.imgUrl} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            {/* <p>Horns: {this.props.horns}</p>
            <p>Type: {this.props.type}</p> */}
            <p>{this.props.description}</p>
            <p>❤️{this.state.voteCount}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;
