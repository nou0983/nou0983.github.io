import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class VideoModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <div className="video" onClick={this.handleShow}>
          <i class="fas fa-play fa-3x" />
        </div>        

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <iframe
              src="https://www.youtube.com/embed/HnwsG9a5riA"
              title="a"
              frameborder="0"
              height="350"
              width="100%"
              allowfullscreen
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default VideoModal;
