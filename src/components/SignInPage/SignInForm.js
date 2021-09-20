import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Header from "./Header";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false,
    };
  }
  handleShowSignIn = () => {
    this.setState({
      showSignIn: true,
    });
  };
  handleCloseSignIn = () => {
    this.setState({
      showSignIn: false,
    });
  };
  handleShowSignUp = () => {
    this.setState({
      showSignUp: true,
    });
  };
  handleCloseSignUp = () => {
    this.setState({
      showSignUp: false,
    });
  };
  handleSignIn = (e) => {
    e.preventDefault();
    // console.log(e.target.userName.value);
    const reqBody = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
    axios.post("http://localhost:8080/signIn", reqBody).then((foundUser) => {
      console.log(foundUser);
      alert(foundUser.data.message);
      this.props.setLoginUser(foundUser.data.user);
      this.props.history.push("/");
    });
  };
  handleSignUp = (e) => {
    e.preventDefault();
    console.log(e.target.userName.value);
    const reqBody = {
      userName: e.target.userName.value,
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios.post("http://localhost:8080/register", reqBody).then((foundUser) => {
      console.log(foundUser);
      alert(foundUser.data.message);
    });
    this.props.history.push("/intrest");
  };

  handleClick = () => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <>
        <Header handleShowSignIn={this.handleShowSignIn} handleShowSignUp={this.handleShowSignUp} />

        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showSignIn}
        >
          <Modal.Header closeButton onClick={this.handleCloseSignIn}>
            <Modal.Title>Welcome To Explorest</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="loginForm" onSubmit={this.handleSignIn}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="loginForm"
                  type="text"
                  name="userName"
                  placeholder="Enter email or User Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
              <br />
              <Button variant="primary" onClick={this.handleClick}>
                Sign Up
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showSignUp}
        >
          <Modal.Header closeButton onClick={this.handleCloseSignUp}>
            <Modal.Title>Welcome To Explorest</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSignUp}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  placeholder="Enter UserName"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Enter Full Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default withRouter(SignInForm);
