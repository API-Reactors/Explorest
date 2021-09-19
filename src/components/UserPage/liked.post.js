
import React from 'react';

// import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


import Editcommentmodal from "./Editcommentmodal"
class LikedPost extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            likedPosts: [{ title: "hi", imgUrl: "https://avatars.githubusercontent.com/u/85199984?v=4", description: "abdijd", comment: "gg" }, { title: "hi", imgUrl: "https://avatars.githubusercontent.com/u/85199984?v=4", description: "abdijd", comment: "" }],
            showCommentEdit: false,
            obj: {}

        }
    }
    editComment = (item) => {
        this.setState({
            showCommentEdit: true,
            obj: item,
        })

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
                        showCommentEdit={this.state.showCommentEdit}
                        closemodal={this.closemodal}
                        obj={this.state.obj}
                    />
                }
            </>
        );
    }
}


export default LikedPost;