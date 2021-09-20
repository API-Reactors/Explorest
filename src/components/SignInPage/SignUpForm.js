import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

class SignUpForm extends React.Component {


  handleSignOut = (e) => {
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

  render() {
    return (
      <Form onSubmit={this.handleSignOut}>
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
          <Form.Control type="text" name="email" placeholder="Enter Email" />
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
    );
  }
}
export default withRouter(SignUpForm);
