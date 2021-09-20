import React from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Button, Row } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { findByDisplayValue } from "@testing-library/dom";

class UserMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      test: [],
    };
    this.breakpoints = {
      default:5,
      1100:4,
      700:3
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:8080/main/${this.props.user.userName}`)
      .then((foundItem) => {
        this.setState({ test: foundItem.data });
      })
      .catch((error) => alert(error.message));
  };

  handleClick = () => {
    this.props.setLogoutUser();
  };

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleClick}>
          Sign Up
        </Button>

       
          {this.state.test.length > 0 && (
             <Masonry
             breakpointCols={this.breakpoints}
             className="my-masonry-grid"
             columnClassName="my-masonry-grid_column"
           >
              {this.state.test.map((value) => {
                return (
                    <div style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={value.img} />
                      <Card.Body>
                        <Card.Title>{value.title}</Card.Title>
                        {/* <Card.Text> {value.description} </Card.Text> */}
                        <Button>test </Button>
                      </Card.Body>
                    </div>
                );
              })}
            </Masonry>
          )}
        
      </div>
    );
  }
}

export default UserMainPage;
