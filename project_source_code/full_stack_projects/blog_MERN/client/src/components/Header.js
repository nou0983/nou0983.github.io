import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";

class Header extends Component {
  state = { show: false };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleSubmit = () => {
    this.handleClose();
    this.props.signOut();
  };

  renderLinks() {
    if (this.props.currentUser.isAuthenticated) {
      return (
        <>
          <Nav className="mr-auto">
            <Link className="nav-link mx-2" to="/">
              Home
            </Link>
            <Link
              className="nav-link mx-2"
              to={`/users/${this.props.currentUser.user.userId}/messages`}
            >
              Posts
            </Link>     
            <Link
              className="nav-link mx-2"
              to={`/users/${this.props.currentUser.user.userId}/messages/new`}
            >
              Create Post
            </Link>           
          </Nav>
          <Nav className="ml-auto">
            <a href="#" className="nav-link ml-2" onClick={this.handleShow}>
              <i className="fas fa-user-times" /> Sign Out
            </a>
          </Nav>
        </>
      );
    } else {
      return (
        <>
          <Nav className="mr-auto">
            <Link className="nav-link mx-2" to="/">
              Home
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Link className="nav-link mx-2" to="/signin">
              <i className="fas fa-user" /> Sign In
            </Link>
            <Link className="nav-link mx-2" to="/signup">
              <i className="fas fa-user" /> Sign Up
            </Link>
          </Nav>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <Navbar bg="dark" className="navbar-dark p-0" expand="sm">
          <div className="container">
            <Navbar.Brand href="/">Blogen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {this.renderLinks()}
            </Navbar.Collapse>
          </div>
        </Navbar>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Out</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to sign out?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={this.handleSubmit}>
              Sign Out
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

function mapStatetoProps(state) {
  return { currentUser: state.auth };
}

export default connect(
  mapStatetoProps,
  actions
)(Header);
