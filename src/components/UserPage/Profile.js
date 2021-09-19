import React from 'react';

import axios from 'axios';


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                userName :'',
                fullName :'',
                email :'',



        }

}


render() {
    return (
        <div>


<h1>{this.props.fullname}</h1>

<h2> User Name : {this.props.userName}
Email:{this.props.email}
</h2>


        </div>

           
    );
}


}
export default Profile;


