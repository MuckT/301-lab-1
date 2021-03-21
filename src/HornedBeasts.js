import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.name}</h2>
        <img title={this.name} alt={this.name + "image"} src={this.imgUrl}></img>
        <p>{this.description}</p>
      </div>
    )
  }
}

export default HornedBeasts;