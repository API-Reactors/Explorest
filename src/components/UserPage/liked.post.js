import React from "react";
import Masonry from "react-masonry-css";
// import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import axios from "axios";
import logo from "../assets/logo.png";

import Editcommentmodal from "./Editcommentmodal";
class LikedPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likedPosts: this.props.user.likes,
      showCommentEdit: false,
      obj: {},
      user: JSON.parse(localStorage.getItem("user")),
    };
    this.breakpoints = {
      default: 5,
      1100: 4,
      700: 3,
    };
  }
  editComment = (item) => {
    this.setState({
      showCommentEdit: true,
      obj: item,
    });
  };

  closemodal = () => {
    this.setState({
      showCommentEdit: false,
      user: JSON.parse(localStorage.getItem("user")),
    });
  };

  deleteFavorite = async (item) => {
    console.log(item);
    const reqBody = { title: item.title };
    let res = await axios.put(
      `${process.env.REACT_APP_API_URL}/deleteLike/${this.state.user._id}`,
      reqBody
    );
    localStorage.setItem("user", JSON.stringify(res.data));
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
    });
  };

  render() {
    return (
      <div style={{ margin: "90px 80px", textAlign: "left" }}>
        <Masonry
          breakpointCols={this.breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {this.state.user.likes.map((item, idx) => {
            return (
              <div key={idx}>
                <Card style={{ width: "15rem", border: "0" }}>
                  <Card.Img
                    variant="top"
                    src={item.imgUrl}
                    style={{
                      borderRadius: "1.2em",
                      boxShadow:
                        " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                    onClick={() => {
                        this.editComment(item);}}
                  />

                  <Card.Body style={{ padding: "0.3rem .1rem" }}>
                    <button
                      variant="light"
                      type="submit"
                      onClick={() => {
                        this.editComment(item);
                      }}
                      style={{
                        backgroundColor: "#ffffff00",
                        border: "0",
                        color: "gray",
                        marginLeft: "10.5em",
                      }}
                    >
                      <i class="fas fa-edit" style={{ fontSize: "1.3em" }}></i>
                    </button>

                    <button
                      variant="light"
                      type="submit"
                      onClick={() => {
                        this.deleteFavorite(item);
                      }}
                      style={{
                        backgroundColor: "#ffffff00",
                        border: "0",
                        color: "#dc3545",
                      }}
                    >
                      <i
                        class="fas fa-trash-alt"
                        style={{ fontSize: "1.3em" }}
                      ></i>
                    </button>
                    {/* <Card.Title
                      style={{
                        width: "15em",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "1.1em",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      <img src={logo} style={{ width: "1.2em" }} />{" "}
                      {item.comment}
                    </Card.Title>
                    <Card.Text>
                      <p>Your Note: {item.comment}</p>
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Masonry>
        {this.state.showCommentEdit && (
          <Editcommentmodal
            user={this.state.user}
            showCommentEdit={this.state.showCommentEdit}
            closemodal={this.closemodal}
            obj={this.state.obj}
            updatecomment={this.updatecomment}
            setLoginUser={this.props.setLoginUser}
          />
        )}
      </div>
    );
  }
}

export default LikedPost;
