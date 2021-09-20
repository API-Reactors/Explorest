import React from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Button, Row } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { findByDisplayValue } from "@testing-library/dom";
import IntrestForm from "../SignInPage/IntrestForm";
import CardModule from "./CardModule";
class UserMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      show:false,
      content: '',
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
  handleopen = (value)=>{
    this.setState({
      show:true,
      content:value
    })
  }
  closemodal = () => {
    this.setState({
        show: false,

    })
}

setLogoutUser =()=>{
this.props.setLogoutUser();

}

  render() {
    return (
      <div>
        
        <Button variant="primary" onClick={this.props.setLogoutUser}>
          Log out
        </Button>
          {  this.state.user.intrests.length > 0 ?
          <>
             <Masonry 
             breakpointCols={this.breakpoints}
             className="my-masonry-grid"
             columnClassName="my-masonry-grid_column"
           >
              {this.state.test.map((value) => {
                return (
                    <Card style={{ width: "18rem" }} onClick={() => {this.handleopen(value)}}>
                      <Card.Img variant="top" src={value.img} />
                      <Card.Body>
                        <Card.Title>{value.title}</Card.Title>
                        {/* <Card.Text> {value.description} </Card.Text> */}
                      </Card.Body>
                    </Card>
                );
              })}
            </Masonry> 
            <CardModule
            show={this.state.show}
            content={this.state.content}
            closemodal={this.closemodal}
            user={this.state.user}
            />
            </>
            : <IntrestForm />
          }
        
      </div>
    );
  }
}

export default UserMainPage;
