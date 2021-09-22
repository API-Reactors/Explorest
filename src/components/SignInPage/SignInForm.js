import React from "react";
import { Form, Button, Modal, Carousel } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import logo from "../assets/logo.png";
import foodImg from "../assets/foodimg.json";
import artImg from "../assets/artimg.json";
import animalImg from "../assets/animal.json";
import Masonry from "react-masonry-css";
import Swal from "sweetalert2";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false,
    };
    this.breakpoints = {
      default: 7,
      1100: 4,
      700: 3,
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
    const reqBody = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/signIn`, reqBody)
      .then((foundUser) => {
        console.log(foundUser.data);

        // swal.fire(foundUser.data.message, "Please Login Now!", "success");
        // alert(foundUser.data.message);
        this.props.setLoginUser(foundUser.data.user);
      });
    this.props.history.push("/");
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
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, reqBody)
      .then((foundUser) => {
        console.log(foundUser);
        if (foundUser.data.err) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: foundUser.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: foundUser.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
          this.handleShowSignIn();
          this.handleCloseSignUp();
        }
      });
  };

  handleClick = () => {
    this.setState({
      showSignUp: true,
      showSignIn: false,
    });
  };

  componentDidMount = () => {
    window.addEventListener("scroll", (event) => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      console.log(Math.ceil(scrolled), scrollable);

      if (Math.floor(scrolled) === scrollable) {
        this.handleShowSignIn();
      }
    });
  };

  render() {
    return (
      <>
        <Header
          handleShowSignIn={this.handleShowSignIn}
          handleShowSignUp={this.handleShowSignUp}
        />

        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showSignIn}
        >
          <Modal.Header
            closeButton
            onClick={this.handleCloseSignIn}
            style={{
              border: "0px",
            }}
          ></Modal.Header>
          <div
            style={{
              padding: "0px 70px 60px",
            }}
          >
            <Modal.Title
              style={{
                textAlign: "center",
                padding: "0 0 20px",
              }}
            >
              <img src={logo} style={{ width: "4em" }} />
              <br />
              <h2 style={{ fontWeight: "700" }}>Welcome To Explorest</h2>
            </Modal.Title>
            <Modal.Body>
              <Form className="loginForm" onSubmit={this.handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    name="userName"
                    placeholder="Enter email or User Name"
                    style={{ height: "3em" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    style={{ height: "3em", marginBottom: "30px" }}
                  />
                </Form.Group>
                <Button
                  variant="danger"
                  type="submit"
                  style={{
                    width: "15em",
                    borderRadius: "5em",
                    fontSize: "20px",
                  }}
                >
                  Sign In
                </Button>
                <br />
                Or
                <br />
                <Button
                  variant="primary"
                  style={{
                    width: "15em",
                    borderRadius: "5em",
                    fontSize: "20px",
                  }}
                  onClick={this.handleClick}
                >
                  Sign Up
                </Button>
              </Form>
            </Modal.Body>
          </div>
        </Modal>

        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showSignUp}
        >
          <Modal.Header
            closeButton
            onClick={this.handleCloseSignUp}
            style={{
              border: "0px",
            }}
          ></Modal.Header>
          <div
            style={{
              padding: "0px 70px 60px",
            }}
          >
            <Modal.Title
              style={{
                textAlign: "center",
                padding: "0 0 20px",
              }}
            >
              <img src={logo} style={{ width: "4em" }} />
              <br />
              <h2 style={{ fontWeight: "700" }}>Welcome To Explorest</h2>
            </Modal.Title>
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
                <Button
                  variant="primary"
                  style={{
                    width: "15em",
                    borderRadius: "5em",
                    fontSize: "20px",
                    marginTop: "20px",
                  }}
                  type="submit"
                >
                  Register
                </Button>
              </Form>
            </Modal.Body>
          </div>
        </Modal>

        <Carousel
          variant="dark"
          controls="false"
          indicators="false"
          fade
          pause="false"
        >
          <Carousel.Item>
            <div className="carsForm">
              <br />
              <br />
              <h1>Explore New Things</h1>
              <h2 style={{ color: "#FFC069" }}>New recipes</h2>

              <Masonry
                breakpointCols={this.breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {foodImg.map((img, i) => {
                  return (
                    <img
                      className={`foodImg foodImg-${i}`}
                      style={{ width: "13rem", marginBottom: "20px" }}
                      src={img}
                    />
                  );
                })}
              </Masonry>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carsForm">
              <br />
              <br />
              <h1>Explore New Things</h1>
              <h2 style={{ color: "#57CC99" }}>Wild, Nature & Plants</h2>

              <Masonry
                breakpointCols={this.breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {animalImg.map((img, i) => {
                  return (
                    <img
                      className={`foodImg foodImg-${i}`}
                      style={{ width: "13rem", marginBottom: "20px" }}
                      src={img}
                    />
                  );
                })}
              </Masonry>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carsForm">
              <br />
              <br />
              <h1>Explore New Things</h1>
              <h2 style={{ color: "#548CA8" }}>Books, News & Sport</h2>

              <Masonry
                breakpointCols={this.breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {artImg.map((img, i) => {
                  return (
                    <img
                      className={`foodImg foodImg-${i}`}
                      style={{ width: "13rem", marginBottom: "20px" }}
                      src={img}
                    />
                  );
                })}
              </Masonry>
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default withRouter(SignInForm);
