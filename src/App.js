import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInForm from "./components/SignInPage/SignInForm";
import SignUpForm from "./components/SignInPage/SignUpForm";
import IntrestForm from "./components/SignInPage/IntrestForm";
// import HomePage from "./components/UserPage/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserMainPage from './components/UserPage/UserMainPage';
import Profile from "./components/UserPage/Profile";

class App extends React.Component {

  constructor(props) {
    super(props);
    const userParsed = JSON.parse(localStorage.getItem("user"));
    const userY = userParsed;
    this.state = {
      user: userY,
      userData: '',
      searchresults:'',
      searchQuery: ""
    }
  }

  setLoginUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    const userParsed = JSON.parse(localStorage.getItem("user"));
    const userY = userParsed;
    this.setState({
      user: userY,
      userData: user,
    });

  }
  setLogoutUser = () => {
    localStorage.removeItem("user");
    this.setState({
      user: {}
    });
  }
  // handleSearch = async (e) => {
  //   
  //   await this.setState({
  //     searchQuery: e.target.query.value
  //   })
  //   console.log(this.state.searchQuery);
  //   const seaching = await axios.get(`https://pixabay.com/api/?key=23439126-48e6990e9f2a6b0eef8dd8f7e&q=${this.state.searchQuery}&image_type=photo&safesearch=true`)
  //   await this.setState({
  //     searchresults: seaching.data.hits
  //   })
    
  // }

  render() {

    return (
      <div>

        <Router>
          <Switch>
            <Route exact path="/">
              {
                this.state.user && this.state.user._id ? <UserMainPage setLogoutUser={this.setLogoutUser} user={this.state.user} /> : <SignInForm setLoginUser={this.setLoginUser}

                />
              }
            </Route>
            <Route path="/login">
              <SignInForm setLoginUser={this.setLoginUser} />
            </Route>
            <Route path="/register">
              <SignUpForm
                setLoginUser={this.setLoginUser}
              />
            </Route>
            <Route path="/intrest">
              <IntrestForm
                user={this.state.user}
                setLoginUser={this.setLoginUser}
              />
            </Route>
            <Route path="/profile">
              <Profile
                setLoginUser={this.setLoginUser}
                user={this.state.user}
                setLogoutUser={this.setLogoutUser}
              />
            </Route>           
          </Switch>
        </Router>
      </div>


    );
  }
}

export default App;
