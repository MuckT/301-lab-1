import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    const beast = this.props.beast;
    console.log('Beast', beast);
    return (
      <Modal show={this.props.display} onHide={this.props.displayFlipper}>
        <Modal.Header closeButton>
          <Modal.Title data-testid="modal-title" className="d-flex justify-content-center mb-2">{beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img data-testid="modal-img" src={beast.image_url} />
        </Modal.Body>
        <Modal.Footer>
          <Button data-testid="modal-footer-close" variant="primary" onClick={this.props.displayFlipper}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;

