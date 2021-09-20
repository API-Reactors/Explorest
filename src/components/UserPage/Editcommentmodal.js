
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';

export class Editcommentmodal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newuser: {},
        };
    }

    updatecomment = async (e) => {
        e.preventDefault()

        const reqBody = {
            title: this.props.obj.title,
            newcomment: e.target.newComment.value
        }
        console.log(e.target.newComment.value);

        let res = await axios.put(`http://localhost:8080/updateLike/${this.props.user._id}`, reqBody)

        console.log(res.data);
        this.setState({
            newuser: res.data
        });
        this.props.closemodal()
        this.props.setLoginUser(this.state.newuser)
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

                    <Form onSubmit={this.props.updatecomment}>
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