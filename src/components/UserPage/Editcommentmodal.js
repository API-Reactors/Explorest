'use strict'
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import { withRouter } from "react-router-dom";

export class Editcommentmodal extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    updatecomment = async (e) => {
        e.preventDefault()

        const reqBody = {
            title: this.props.obj.title,
            newcomment: e.target.newComment.value
        }


        let res = await axios.put(`http://localhost:8080/updateLike/${this.props.user._id}`, reqBody)
        localStorage.setItem("user", JSON.stringify(res.data));

        this.setState({
            newuser: res.data,
           
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
                        <Button variant="primary" type="submit" >
                            Update!
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            
        );
    }

}
export default withRouter(Editcommentmodal);