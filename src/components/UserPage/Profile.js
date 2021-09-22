import React from "react";
import LikedPost from "./liked.post.js";
import Intrest from "./Intrest.js";
// import axios from 'axios';
import Header from "./UserHeader";
import { withRouter } from "react-router-dom";
import logo from "../assets/logo.png";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIntrestEdit: false,
      user: JSON.parse(localStorage.getItem("user")),
    };
  }
  setLogoutUser = () => {
    this.props.setLogoutUser();
    this.props.history.push("/");
  };
  closemodal = () => {
    this.setState({
      showIntrestEdit: false,
      user: JSON.parse(localStorage.getItem("user")),
    });
  };
  handleIntrestsModule = () => {
    this.setState({
      showIntrestEdit: true,
    });
  };

  render() {
    return (
      <div>
        <Header
          handleLogout={this.setLogoutUser}
          handleIntrestsModule={this.handleIntrestsModule}
        />
        <div className="profile">
          <div className="profile-card">
          <img
            className="img"
            src="https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
          />
          <div className="info">
          <h1>{this.state.user.fullName}</h1>
          <p>{this.state.user.email}</p>
          </div>
          </div>
          <LikedPost
            user={this.state.user}
            setLoginUser={this.props.setLoginUser}
          />
          <Intrest
            showIntrestEdit={this.state.showIntrestEdit}
            closemodal={this.closemodal}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(Profile);
