import React from 'react';
import { Form, Button } from "react-bootstrap";


class HomePage extends React.Component {
    
    handleClick = () => {
        this.props.setLoginUser({});
    }

render(){
    return(<><h1>Welcome to main page</h1>
        <Button variant="primary" onClick={this.handleClick}>
          Sign Up
        </Button></>)
}

} 

export default HomePage;