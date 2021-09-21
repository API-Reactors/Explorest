import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Masonry from "react-masonry-css";
import axios from 'axios';
export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.breakpoints = {
            default: 5,
            1100: 4,
            700: 3
        };
    }
    // ${this.state.search}
    getSeach = async (e) => {

        console.log("s");
    }

   

    render() {
        return (

            < Masonry
                breakpointCols={this.breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {this.props.searchResult.map((value) => {
                    return (
                        <Card style={{ width: "16.5rem" }} onClick={() => { this.props.handleopen(value.tags,value.webformatURL) }}>
                            <Card.Img variant="top" src={value.webformatURL} />
                            <Card.Body>
                                <Card.Title>{value.tags}</Card.Title>

                            </Card.Body>
                        </Card>
                    );
                })}
            </Masonry>
        )
    }
}

export default Search
