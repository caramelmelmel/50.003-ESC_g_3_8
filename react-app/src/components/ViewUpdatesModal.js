import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from "react-bootstrap";


export class ViewUpdatesModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal {...this.props} >
                <Modal.Header closeButton>
                    <Modal.Title>Rectified non-compliance #?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        Includes the photo and text box for additional comments
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning">Back</Button>
                    <Button variant="primary">Solved</Button>
                    <Button variant="warning">Next</Button>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
          </Modal>
            
        )
    }
    



}