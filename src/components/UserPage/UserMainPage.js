import React from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class UserMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      test: [],
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
          <>
            {this.state.test.map((value) => {
              return (
                <>
                  <Card style={{ width: "18rem", display: "inline-block" }}>
                    <Card.Img variant="top" src={value.img} />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                      {/* <Card.Text> {value.description} </Card.Text> */}
                      <Button>test </Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default UserMainPage;
