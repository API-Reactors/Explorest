
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import SignInForm from "./components/SignInPage/SignInForm";
import SignUpForm from "./components/SignInPage/SignUpForm";
import HomePage from "./components/UserPage/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserMainPage from './components/UserMainPage'; 


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      user:''
    }
  }
 
  setLoginUser = (user)=>{
    this.setState({
      user:user
    })

  }

  render() {
 
    return (

      <div>
      //Yousef
       <UserMainPage    />
      <Router>
        <Switch>
          <Route exact path="/">
            {
              this.state.user && this.state.user._id ? <HomePage setLoginUser={this.setLoginUser} /> : <SignInForm setLoginUser={this.setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <SignInForm setLoginUser={this.setLoginUser}/>
          </Route>
          {/* <Route path="/register">
            <SignUpForm />
          </Route> */}
        </Switch>
      </Router>
    </div>

    );
  }
}

export default App;
