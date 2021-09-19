import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInForm from "./components/SignInPage/SignInForm";
import SignUpForm from "./components/SignInPage/SignUpForm";
import IntrestForm from "./components/SignInPage/IntrestForm";
import HomePage from "./components/UserPage/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserMainPage from './components/UserPage/UserMainPage';
import Profile from "./components/UserPage/Profile";


class App extends React.Component {

  constructor(props){
    super(props);
    const userParsed = JSON.parse(localStorage.getItem("user"));
    this.state={
      user:userParsed,
      userData:''
    }
  }

  setLoginUser = (user)=>{
    
    localStorage.setItem("user", JSON.stringify(user));
    const userParsed = JSON.parse(localStorage.getItem("user"));
    console.log(userParsed);
    this.setState({
      user:userParsed,
      userData: user,
    });
  }

  setLogoutUser = ()=>{
    localStorage.removeItem("user");
    this.setState({
      user:{}
    });
  }

  render() {

    return (
      <div>
    
       {/* <    />
      <Profile/> */}
      <Router>
        <Switch>
          <Route exact path="/">
            {
              this.state.user && this.state.user._id ? <UserMainPage setLogoutUser={this.setLogoutUser} user={this.state.user} /> : <SignInForm setLoginUser={this.setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <SignInForm setLoginUser={this.setLoginUser}/>
          </Route>
          <Route path="/register">
            <SignUpForm />
          </Route>
          <Route path="/intrest">
            <IntrestForm />
          </Route>
        </Switch>
      </Router>
    </div>


    );
  }
}

export default App;
