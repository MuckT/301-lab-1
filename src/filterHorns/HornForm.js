import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

class HornForm extends React.Component {
  render() {
    let options = [];
    let horns = [];
    this.props.data.forEach(item => {
      horns.push(item.horns);
    });
    let uniqueOptions = [...new Set(horns)];
    uniqueOptions.forEach(item => {
      options.push(<option value={item}>{item}</option>);
    });
    return (
      <Form>
        <Form.Group>
          <Form.Label>Select Number of Horns To Filter By</Form.Label>
          <Form.Control as="select">
            {options}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default HornForm;
