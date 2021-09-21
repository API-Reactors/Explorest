import React from "react";
import Masonry from "react-masonry-css";
// import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import axios from "axios";

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
      `http://localhost:8080/deleteLike/${this.state.user._id}`,
      reqBody
    );
    localStorage.setItem("user", JSON.stringify(res.data));
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
    });
  };

  render() {
    return (
      <>
        <Masonry
          breakpointCols={this.breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {this.state.user.likes.map((item, idx) => {
            return (
              <div key={idx}>
                <Card style={{ width: "16rem" }}>
                  <Card.Img variant="top" src={item.imgUrl} />

                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      <b>Your Note: {item.comment}</b>

                      <Button
                        variant="primary"
                        type="submit"
                        onClick={() => {
                          this.editComment(item);
                        }}
                      >
                        Update Note
                      </Button>

                      <Button
                        variant="secondary"
                        type="submit"
                        onClick={() => {
                          this.deleteFavorite(item);
                        }}
                      >
                        Remove
                      </Button>
                    </Card.Text>
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
      </>
    );
  }
}

export default LikedPost;
