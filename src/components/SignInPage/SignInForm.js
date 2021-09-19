import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userName: "",
    };
  }

  handleSignIn = (e) => {
    e.preventDefault();
    console.log(e.target.userName.value);
    const reqBody = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
    axios.post("http://localhost:8080/signIn", reqBody).then((foundUser) => {
      console.log(foundUser);
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" name="userName" placeholder="Enter email" />
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
          Submit
        </Button>
      </Form>
    );
  }
}
export default SignInForm;
