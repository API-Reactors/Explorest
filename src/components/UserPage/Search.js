import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Masonry from "react-masonry-css";
import axios from "axios";



export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.breakpoints = {
      default: 4,
      1100: 3,
      700: 3,
    };
  }
  // ${this.state.search}
  getSeach = async (e) => {
    console.log("s");
  };

  render() {
    return (
      <div style={{ margin: "90px 50px" }}>
        <Masonry
          breakpointCols={this.breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {this.props.searchResult.map((value) => {
            return (
              <Card
              style={{ width: "20.5em", border: "0" }}
                onClick={() => {
                  this.props.handleopen(value.tags, value.webformatURL);
                }}
              >
                <Card.Img
                  variant="top"
                  src={value.webformatURL}
                  style={{
                    borderRadius: "1.2em",
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                />
                <Card.Body style={{ padding: "0.3rem .1rem" }}>
                  <Card.Title
                    style={{
                      width: "15em",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "1.1em",
                      fontWeight: "bold",
                    }}
                  >
                     
                    {value.tags}
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Masonry>
      </div>
    );
  }
}

export default Search;
