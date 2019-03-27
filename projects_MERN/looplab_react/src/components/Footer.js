import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class Footer extends Component {
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
    const year = new Date().getFullYear();
    return (
      <footer id="main-footer" class="bg-dark">
        <div class="container">
          <div class="row">
            <div class="col text-center py-4">
              <h3>LoopLAB</h3>
              <p>Copyright &copy; {year}</p>
              <Button variant="primary" onClick={this.handleShow}>
                Contact Us
              </Button>
              <Modal show={this.state.show} onHide={this.handleClose} className="text-dark">
                <Modal.Header closeButton>
                  <Modal.Title className="h5">Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="message">Message</label>
                      <textarea class="form-control"></textarea>
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" className="btn-block" onClick={this.handleClose}>
                    Submit
                  </Button>  
                </Modal.Footer>             
              </Modal>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}


export default Footer;
