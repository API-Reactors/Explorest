import React from "react";
import {
  Navbar,
  Button,
  Nav,
} from "react-bootstrap";
import logo from "../assets/logo6.png";
import "../assets/style.css";

class Header extends React.Component {

  handleLogOut = () => {
    this.props.handleLogout();
  };


  render() {
    return (
      <header>

        <Navbar className="header shadow-sm p-3 mb-5 bg-white rounded">
          <Navbar.Brand className="mr-lg-5" href="/">
            <img src={logo} className="logo" />
          </Navbar.Brand>


          <Navbar.Collapse id="navbarScroll" className="navBar">
          <form class="input-group" onSubmit={this.props.handleSearch}>
          <div class="form-outline">
            <input name="query"  type="search" id="form1" class="form-control" placeholder="Search" />
          </div>
          <button type="submit" class="btn btn-primary">
            
          </button>
        </form>

            <Nav.Link style={{ padding: "0 8px", color: "black" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link
              style={{ padding: "0 15px 0 8px", color: "black" }}
              href="/profile"
            >
              Profile
            </Nav.Link>
            <Nav.Link
              style={{ padding: "0 22px 0 8px", color: "black" }}
              href="/search"
            >
              Search
            </Nav.Link>

            <Button
              variant="light"
              style={{
                borderRadius: "50px",
                fontWeight: "bold",
                margin: "0 5px",
              }}
              onClick={this.props.handleIntrestsModule}>
              change intrest
            </Button>
            <Button
              variant="danger"
              style={{
                borderRadius: "50px",
                fontWeight: "bold",
                margin: "0 5px",
              }}
              onClick={this.handleLogOut}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        </Navbar>
  
      </header>
    );
  }
}

export default Header;
