
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';

export class Editcommentmodal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    updatecomment = (e) => {
        e.preventDefault()

        const reqBody = {
            title: this.props.obj.title,
            newcomment: e.target.newComment.value
        }
        console.log(e.target.newComment.value);

        axios
            .put(`${process.env.REACT_APP_API_URL}/updateLike/${this.props.User._id}`
            ,
            reqBody
            )
            .then((res) => {
                console.log(res);
                this.setState({
                    showUpdateModal: false,
                });
            })
        this.props.closemodal()
    }

    render() {
        return (
            <Modal
                show={this.props.showCommentEdit}
            >
                <Modal.Header>
                    <Modal.Title>Update Comment</Modal.Title>
                    <Button variant="primary" onClick={this.props.closemodal}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={this.updatecomment}>
                        <Form.Group className="mb-3">
                            <Form.Label>New Comment</Form.Label>
                            <Form.Control
                                type="text"
                                name="newComment"
                                defaultValue={this.props.obj.comment}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update!
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}
export default Editcommentmodal;