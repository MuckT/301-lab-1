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
    this.props.handleSelectChange(this.props.title);
  }

  render() {
    return (
      <Card onClick={this.handleClick} className="mb-2 card bg-light text-dark text-center" style={{ width: '100%' }}>
        <Card.Img alt={this.props.title + ' image'} variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text data-testid="vote-count">❤️ {this.state.voteCount}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;
