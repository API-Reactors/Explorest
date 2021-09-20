import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';

export class CardModule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newuser: {},
        };
    }

    addToFavorite = async (e) => {
        e.preventDefault()

        const reqBody = {
            title: this.props.content.title,
            imgUrl: this.props.content.img,
            description:this.props.content.description,
            comment: e.target.comment.value
        }
        console.log(e.target.comment.value);

        let res = await axios.put(`http://localhost:8080/addLike/${this.props.user._id}`, reqBody)

        console.log(res);
        // this.setState({
        //     newuser: res.data
        // });
        this.props.closemodal()
        
    }

    render() {
        return (
            <Modal
                show={this.props.show}
            >
                <Modal.Header>
                    <Modal.Title>{this.props.content.title}</Modal.Title>
                    <Button variant="primary" onClick={this.props.closemodal}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>
                <img width ="467 px"  src={this.props.content.img} />
                {this.props.content.description}
                <br/>
                    <Form onSubmit={this.addToFavorite}>
                        <Form.Group className="mb-3">
                            <Form.Label>Add It And Take A Note</Form.Label>
                           <Form.Control
                                type="text"
                                name="comment"
                                placeholder= "Add Your Note !!"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add To Favorite
                        </Button>
                    </Form>  
                </Modal.Body>
            </Modal>
        );
    }
}
export default CardModule;