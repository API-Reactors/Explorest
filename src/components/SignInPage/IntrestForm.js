import React from 'react';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

class IntrestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allIntrestsArray: []
    }

  }
  handleIntrest = async (e) => {
    e.preventDefault();
    let chosen = []
    for (let i = 1; i < 9; i++) {
      let userintr = document.getElementById(`${i}`)
      if (userintr.checked) {
        chosen.push(userintr.name);
      }
      await this.setState({
        allIntrestsArray: chosen
      })
    }
    const testUser = JSON.parse(localStorage.getItem("user"));
    let reqBody = this.state.allIntrestsArray


    axios.put(`http://localhost:8080/addIntrests/${testUser._id}`, reqBody)
    console.log(testUser._id);
  }
  render() {
    return (<>
      <h1>Welcome to Intrest page</h1>
      <Form onSubmit={this.handleIntrest}>

        <div key={`inline-checkbox`} className="mb-3">
          <Form.Check
            inline
            label="Books"
            name="books"
            type={'checkbox'}
            value="boks"
            id={`1`}
          />
          <Form.Check
            inline
            label="News"
            name="news"
            type={'checkbox'}
            id={`2`}
          />
          <Form.Check
            inline
            label="Food"
            name="food"
            type={'checkbox'}
            id={`3`}
          />
          <Form.Check
            inline
            label="Photo"
            name="photo"
            type={'checkbox'}
            id={`4`}
          />
          <Form.Check
            inline
            label="Makeup"
            name="makeup"
            type={'checkbox'}
            id={`5`}
          />
          <Form.Check
            inline
            label="Sport"
            name="sport"
            type={'checkbox'}
            id={`6`}
          />
          <Form.Check
            inline
            label="Anime"
            name="anime"
            type={'checkbox'}
            id={`7`}
          />
          <Form.Check
            inline
            label="Movies"
            name="movies"
            type={'checkbox'}
            id={`8`}
          />

        </div>
        <Button type="submit" >
          Save
        </Button>
      </Form>
    </>
    )
  }
}


export default IntrestForm;