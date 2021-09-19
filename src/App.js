import React from "react";
import './App.css';
import SignInForm from "./components/SignInPage/SignInForm";
import SignUpForm from "./components/SignInPage/SignUpForm";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

 

  render() {
 
    return (
      <div>
      <SignInForm/>
      <SignUpForm/>
      </div>

    );
  }
}

export default App;
