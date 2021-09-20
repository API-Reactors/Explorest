
import React from 'react';
import LikedPost from "./liked.post.js"
// import axios from 'axios';


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             user : this.props.user 
        }

}


render() {
    return (
        <div>


<h1>{this.state.user.fullName}</h1>


<h2> User Name : {this.state.user.userName}
</h2>
<h2>
 Email:{this.state.user.email}
</h2>


<LikedPost
user={this.state.user}
setLoginUser={this.props.setLoginUser}
/>

        </div>

           
    );
}


}
export default Profile;


