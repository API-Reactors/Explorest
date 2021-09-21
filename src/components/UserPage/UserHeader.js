import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
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

          <Navbar.Collapse id="navbarScroll" className="userNav">
            <Nav.Link
              style={{ padding: "0 8px", color: "black", fontSize: "1.2em" }}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{
                padding: "0 15px 0 8px",
                color: "black",
                fontSize: "1.2em",
              }}
              href="/profile"
            >
              Profile
            </Nav.Link>
            <form onSubmit={this.props.handleSearch}>
              <input
                name="query"
                id="form1"
                className="search"
                placeholder="Search"
              />
              <button type="submit" class="btn searchBtn">
                <i class="fas fa-search"></i>
              </button>
            </form>

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
        <Button
          variant="light"
          style={{
            margin: "0 5px",
          }}
          className="setting"
          onClick={this.props.handleIntrestsModule}
        >
          <i class="fas fa-sliders-h"></i>
        </Button>
      </header>
    );
  }
}

export default Header;
