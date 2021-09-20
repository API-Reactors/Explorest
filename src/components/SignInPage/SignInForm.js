import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

class SignInForm extends React.Component {
  
  handleSignIn = (e) => {
    e.preventDefault();
    // console.log(e.target.userName.value);
    const reqBody = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
    axios.post("http://localhost:8080/signIn", reqBody).then((foundUser) => {
      console.log(foundUser.data);
      alert(foundUser.data.message);
      this.props.setLoginUser(foundUser.data.user);
      
    });
   this.props.history.push("/");
  };

  handleClick = () => {
    this.props.history.push("/register");
}


  render() {
    return (
      <Form onSubmit={this.handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>userName</Form.Label>
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
          Sign In
        </Button>
        <br/>
        <Button variant="primary" onClick={this.handleClick}>
          Sign Up
        </Button>
      </Form>
    );
  }
}
export default withRouter(SignInForm);
