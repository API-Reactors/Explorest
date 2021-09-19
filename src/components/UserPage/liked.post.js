import React from 'react';

import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class LikedPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likedPosts : [],
               


        }
// const API_ENDPOINT = `${API_URL}/getLiked/${user_id}`;
const GetData ={
    axios.get(`${process.env.REACT_APP_API_URL}/getLiked/${user_id}`).then((res) => 
    
    {console.log(res);          
    this.setState({
        likedPosts: res.data,           
    });
  })
    // axios.get(`${API_ENDPOINT}`).then((res) => {
    //     console.log(res.data);
    //     this.setState({
    //         likedPosts = res.data,
    //     });

    // })
};
};
// title, imgUrl, description, comment
render() {
     const Post = this.state.likedPosts.map((item,index) => {
    return (
        <div key={index} >
           

        <Card style={{ width: '18rem', }}>
            <Card.Img variant="top" src={item.imgUrl}/>

            <Card.Body>
                <Card.Title>Title:  {item.title}</Card.Title>
                <Card.Text>
                
                    {item.description} <br/>
                    {item.comment} 
                    
                    
                </Card.Text>
                <Button onClick={this.editComment}> Edit Comment !!</Button>
            </Card.Body>
        </Card>
    
   </div>
        
           
    );})
}
}

export default LikedPost;