
import React from 'react';

// import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

import Editcommentmodal from "./Editcommentmodal"
class LikedPost extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            likedPosts: this.props.user.likes,
            showCommentEdit: false,
            obj: {}

        }
    }
    editComment = (item) => {
        this.setState({
            showCommentEdit: true,
            obj: item,
            newuser:[],
        })

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
        this.closemodal()
        this.props.setLoginUser(this.state.newuser)
    }
    closemodal = () => {
        this.setState({
            showCommentEdit: false,

        })
    }
    render() {

        return (
            <>

                <Row md='4' >
                    {this.state.likedPosts.map((item, idx) => {
                        return (
                            <div key={idx} >


                                <Card style={{ width: '18rem', }}>
                                    <Card.Img variant="top" src={item.imgUrl} />

                                    <Card.Body>
                                        <Card.Title>Title:  {item.title}</Card.Title>
                                        <Card.Text>

                                            {item.description} <br />
                                            {item.comment}
                                            <br />
                                            <Button variant="primary" type="submit" onClick={() => { this.editComment(item) }}>
                                                Update Comment
                                            </Button>



                                        </Card.Text>

                                    </Card.Body>
                                </Card>


                            </div>
                        )
                    })
                    }

                </Row >
                {this.state.showCommentEdit &&
                    < Editcommentmodal
                        user={this.props.user}
                        showCommentEdit={this.state.showCommentEdit}
                        closemodal={this.closemodal}
                        obj={this.state.obj}
                        updatecomment={this.updatecomment}
                        setLoginUser={this.props.setLoginUser}
                    />
                }
            </>
        );
    }
}


export default LikedPost;