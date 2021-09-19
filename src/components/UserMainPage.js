import React from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class UserMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/test`)
      .then((testResponse) => {
        this.setState({ test: testResponse.data });
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <div>
        {this.state.test.length > 0 && (
          <>
            {this.state.test.map((value) => {
              return (
                <>
                  <Card
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={value.img} />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text> {value.description} </Card.Text>
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
