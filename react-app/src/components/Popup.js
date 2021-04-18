import { Button, Modal, Row, Col, Form} from "react-bootstrap";
import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";

const Popup = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    console.log("clicked");
  };
  //backdrop="static"

  return (
    <>
      <ReactBootStrap.Button variant="primary" onClick={handleShow}>
        Open Updates File
      </ReactBootStrap.Button>

      <ReactBootStrap.Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Rectified non-compliance #?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Includes the photo and text box for additional comments
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning">Back</Button>
              <Button variant="primary">Solved</Button>
              <Button variant="warning">Next</Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </ReactBootStrap.Modal>
    </>
  );
};

export default Popup;
