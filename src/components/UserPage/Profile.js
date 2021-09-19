
import React from 'react';
import LikedPost from "./liked.post.js"
// import axios from 'axios';


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
              
        }

}


render() {
    return (
        <div>


<h1>{this.props.fullName}</h1>


<h2> User Name : {this.props.userName}
</h2>
<h2>
 Email:{this.props.email}
</h2>


<LikedPost/>

        </div>

           
    );
}


}
export default Profile;


