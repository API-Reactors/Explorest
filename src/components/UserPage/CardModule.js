import React, { Component } from "react";
import { Form, Button, Modal, Col, Row } from "react-bootstrap";
import axios from "axios";

export class CardModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newuser: {},
    };
  }

  addToFavorite = async (e) => {
    e.preventDefault();

    const reqBody = {
      title: this.props.content.title,
      imgUrl: this.props.content.img,
      description: this.props.content.description,
      comment: e.target.comment.value,
    };
    console.log(e.target.comment.value);

    let res = await axios.put(
      `${process.env.REACT_APP_API_URL}/addLike/${this.props.user._id}`,
      reqBody
    );

    console.log(res);
    // this.setState({
    //     newuser: res.data
    // });
    localStorage.setItem("user", JSON.stringify(res.data));
    this.props.closemodal();
  };

  render() {
    return (
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
      >
        <Modal.Header
          closeButton
          onClick={this.props.closemodal}
          style={{
            border: "0px",
          }}
        ></Modal.Header>

        <div>
          <Row className="row-grid align-items">
            <Col md="6">
              <img
                width="100%"
                src={this.props.content.img}
                style={{ padding: "10px 20px 30px", height: "600px" }}
              />
            </Col>

            <Col md="6" padding="10px">
              <div className="postCard">
                <h2>{this.props.content.title}</h2>
                <Modal.Body>
                  <p> {this.props.content.description} </p>
                  <br />
                  <Form onSubmit={this.addToFavorite}>
                    <Form.Control
                      type="text"
                      name="comment"
                      placeholder="Add Your Note !!"
                      style={{
                        width: "100%",
                        height: "50px",
                        borderRadius: "4em",
                      }}
                    />

                    <button type="submit" className="button">
                      +
                    </button>
                  </Form>
                </Modal.Body>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}
export default CardModule;
