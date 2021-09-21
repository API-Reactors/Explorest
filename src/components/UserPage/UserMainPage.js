import React from "react";
import Search from "./Search";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Button, Row } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { findByDisplayValue } from "@testing-library/dom";
import IntrestForm from "../SignInPage/IntrestForm";
import CardModule from "./CardModule";
import Header from "./UserHeader";
import Intrest from "./Intrest.js"

class UserMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      show: false,
      showIntrestEdit: false,
      content: '',
      test: [],
      search: "",
      searchshow: false,
      searchResult: [],
    };
    this.breakpoints = {
      default: 5,
      1100: 4,
      700: 3
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
  handleopen = (title, img, description) => {
    this.setState({
      show: true,
      content: { title: title, img: img, description: description }
    })
  }
  closemodal = () => {
    this.setState({
      show: false,
      showIntrestEdit: false,
    })
  }

  setLogoutUser = () => {
    this.props.setLogoutUser();

  }
  handleIntrestsModule = () => {
    this.setState({
      showIntrestEdit: true,

    })

  }
  handleSearch = async (e) => {
    e.preventDefault();
    await this.setState({
      search: e.target.query.value
    })
    const searching = await axios.get(`https://pixabay.com/api/?key=23439126-48e6990e9f2a6b0eef8dd8f7e&q=${this.state.search}&image_type=photo&safesearch=true`)
    console.log(searching.data.hits[0].tags);
    this.setState({
      searchResult: searching.data.hits,
      searchshow: true,
    })
  }


  render() {
    return (
      <div>
        <Header
          handleLogout={this.setLogoutUser}
          handleIntrestsModule={this.handleIntrestsModule}
          handleSearch={this.handleSearch}
        />
        <div style={{ margin: "20px 70px" }}>
          {this.state.test.length === 0 && (<div class="d-flex justify-content-center">
            <div style={{ textAlign: "center", margin: "0px auto" }} class="spinner-grow text-danger" role="status">
            </div>
          </div>)}
          {this.state.searchshow &&
            <Search
              handleopen={this.handleopen}
              searchResult={this.state.searchResult}
            />
          }
          {!this.state.searchshow &&
            <>
              {this.state.user.intrests.length > 0 ?


                <>


                  < Masonry
                    breakpointCols={this.breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {this.state.test.map((value) => {
                      return (
                        <Card style={{ width: "16.5rem" }} onClick={() => { this.handleopen(value.title, value.img, value.description) }}>
                          <Card.Img variant="top" src={value.img} />
                          <Card.Body>
                            <Card.Title>{value.title}</Card.Title>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </Masonry>
                </>
                : <IntrestForm />
              }
            </>
          }

          <CardModule
            show={this.state.show}
            content={this.state.content}
            closemodal={this.closemodal}
            user={this.state.user}
          />

          <Intrest
            showIntrestEdit={this.state.showIntrestEdit}
            closemodal={this.closemodal}
          />
        </div>

      </div >
    );
  }
}

export default UserMainPage;
