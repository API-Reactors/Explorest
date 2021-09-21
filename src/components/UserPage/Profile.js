
import React from 'react';
import LikedPost from "./liked.post.js"
import Intrest from "./Intrest.js"
// import axios from 'axios';
import Header from "./UserHeader";
import { withRouter } from "react-router-dom";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showIntrestEdit: false,
            user: JSON.parse(localStorage.getItem("user"))
            
        }

    }
    setLogoutUser = () => {
        this.props.setLogoutUser();
        this.props.history.push("/")
    }
    closemodal = () => {
        this.setState({
            showIntrestEdit: false,
            user: JSON.parse(localStorage.getItem("user")),

        })
    }
    handleIntrestsModule= () => {
        this.setState({
            showIntrestEdit: true,
            
        })
       
    }

    render() {
        return (
            <div>
                <Header
                    handleLogout={this.setLogoutUser} 
                    handleIntrestsModule={this.handleIntrestsModule}
                    />

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
                <Intrest
                showIntrestEdit={this.state.showIntrestEdit}
                closemodal={this.closemodal}
                />
            </div>


        );
    }


}
export default withRouter(Profile);


