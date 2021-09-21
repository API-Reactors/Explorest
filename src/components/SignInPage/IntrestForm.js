import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

class IntrestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allIntrestsArray: [],
    };
  }
  handleIntrest = async (e) => {
    e.preventDefault();
    let chosen = [];
    for (let i = 1; i < 9; i++) {
      let userintr = document.getElementById(`${i}`);
      if (userintr.checked) {
        chosen.push(userintr.name);
      }
      await this.setState({
        allIntrestsArray: chosen,
      });
    }
    const testUser = JSON.parse(localStorage.getItem("user"));
    let reqBody = this.state.allIntrestsArray;

    axios
      .put(`http://localhost:8080/addIntrests/${testUser._id}`, reqBody)
      .then(() => {
        console.log(testUser._id);
      });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="intrests">
        <h1>Welcome to Explorest</h1>
        <h3>Please pick one or more filed </h3>
        <Form onSubmit={this.handleIntrest}>
          <div key={`inline-checkbox`} className="mb-3">
            <div className="intrest-box">
              <Form.Check
                inline
                label="Books"
                name="books"
                type={"checkbox"}
                value="boks"
                id={`1`}
                
                className="intrest-box-check"
              />{" "}
              <img src="https://miro.medium.com/max/1000/1*UWA-fJfH7AkORThsjOBNFQ@2x.jpeg" />
            </div>

            <div className="intrest-box">
              <Form.Check
                inline
                label="News"
                name="news"
                type={"checkbox"}
                id={`2`}
                className="intrest-box-check"
              />
              <img src="https://www.thescottishfarmer.co.uk/resources/images/11385326.jpg?display=1&htype=0&type=responsive-gallery" />
            </div>
            <div className="intrest-box">
              <Form.Check
                inline
                label="Food"
                name="food"
                type={"checkbox"}
                id={`3`}
                className="intrest-box-check"
              />
              <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528" />
            </div>
            <div className="intrest-box">
              <Form.Check
                inline
                label="Photography"
                name="photo"
                type={"checkbox"}
                id={`4`}
                className="intrest-box-check"
              />
              <img src="https://i.pinimg.com/originals/65/b7/43/65b743cb3fcf0e32690826bfefc6a63c.jpg" />
            </div>
            <div className="intrest-box">
              {" "}
              <Form.Check
                inline
                label="Makeup"
                name="makeup"
                type={"checkbox"}
                id={`5`}
                className="intrest-box-check"
              />
              <img src="https://st.depositphotos.com/1001855/3699/i/950/depositphotos_36991515-stock-photo-makeup-and-cosmetics-set.jpg" />
            </div>
            <div className="intrest-box">
              <Form.Check
                inline
                label="Sport"
                name="sport"
                type={"checkbox"}
                id={`6`}
                className="intrest-box-check"
              />
              <img src="https://track2traininginstitute.files.wordpress.com/2020/06/sports.jpg" />
            </div>
            <div className="intrest-box">
              <Form.Check
                inline
                label="Memes"
                name="memes"
                type={"checkbox"}
                id={`7`}
                className="intrest-box-check"
              />
              <img src="https://i.pinimg.com/originals/5a/ea/dd/5aeadd53ab6157ab11a74a4b5ba26b9d.jpg" />
            </div>
            <div className="intrest-box">
              <Form.Check
                inline
                label="Arts"
                name="art"
                type={"checkbox"}
                id={`8`}
                className="intrest-box-check"
              />
              <img src="https://thedavidsnider.com/wp-content/uploads/2021/01/istockphoto-577949148-612x612-1.jpg" />
            </div>
          </div>
          <Button  variant="danger"
                  type="submit"
                  style={{
                    width: "7em",
                    borderRadius: "5em",
                    fontSize: "20px",
                    fontWeight:"bold",
                    marginTop:"2.5em"
                  }} >Save</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(IntrestForm);
