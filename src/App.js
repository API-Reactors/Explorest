import React from 'react';
import './App.css';
import Profile from "./components/UserPage/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      User: {
        userName: 'hjjj',
        fullName: 'wllhy',
        email: 'dfgdf',
      }

    }

  }



  render() {

    return (
      <Profile
        userName={this.state.User.userName}

        fullName={this.state.User.fullName}

        email={this.state.User.email}
      />

    );
  }
}

export default App;
