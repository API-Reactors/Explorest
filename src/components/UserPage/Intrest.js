import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
class Intrest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allIntrestsArray: [],
      user:JSON.parse(localStorage.getItem("user"))
    };
  }
  handleIntrest = async (e) => {
    e.preventDefault();
    let chosen = [];
    for (let i = 1; i < 11; i++) {
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
      .put(`${process.env.REACT_APP_API_URL}/addIntrests/${testUser._id}`, reqBody)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        this.props.closemodal();
      });
      
  
   
  };
  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.showIntrestEdit}
      >
        <Modal.Header
          closeButton
          onClick={this.props.closemodal}
          style={{
            border: "0px",
          }}
        ></Modal.Header>

        <div className="Mintrest">
          <h1>Please pick one or more filed!</h1>
          <Modal.Body>
            <Form onSubmit={this.handleIntrest}>
              <div key={`inline-checkbox-1`} className="mb-3">
                <div className="Mintrest-box">
                  <Form.Check
                    inline
                    label="Books"
                    name="books"
                    type={"checkbox"}
                    value="boks"
                    id={`1`}
                    className="Mintrest-box-check"
                  />{" "}
                  <img src="https://miro.medium.com/max/1000/1*UWA-fJfH7AkORThsjOBNFQ@2x.jpeg" />
                </div>

                <div className="Mintrest-box">
                  <Form.Check
                    inline
                    label="News"
                    name="news"
                    type={"checkbox"}
                    id={`2`}
                    className="Mintrest-box-check"
                  />
                  <img src="https://www.thescottishfarmer.co.uk/resources/images/11385326.jpg?display=1&htype=0&type=responsive-gallery" />
                </div>
                <div className="Mintrest-box">
                  <Form.Check
                    inline
                    label="Food"
                    name="food"
                    type={"checkbox"}
                    id={`3`}
                    className="Mintrest-box-check"
                  />
                  <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528" />
                </div>
                <div className="Mintrest-box">
                  <Form.Check
                    inline
                    label="Animal"
                    name="animal"
                    type={"checkbox"}
                    id={`4`}
                    className="Mintrest-box-check"
                  />
                  <img src="https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/ethics-of-photographing-wildlife.jpg" />
                </div>
                <div className="Mintrest-box">
                  {" "}
                  <Form.Check
                    inline
                    label="Makeup"
                    name="makeup"
                    type={"checkbox"}
                    id={`5`}
                    className="Mintrest-box-check"
                  />
                  <img src="https://st.depositphotos.com/1001855/3699/i/950/depositphotos_36991515-stock-photo-makeup-and-cosmetics-set.jpg" />
                </div>
                <div className="Mintrest-box">
                  <Form.Check
                    inline
                    label="Sport"
                    name="sport"
                    type={"checkbox"}
                    id={`6`}
                    className="Mintrest-box-check"
                  />
                  <img src="https://track2traininginstitute.files.wordpress.com/2020/06/sports.jpg" />
                </div>
                <div className="Mintrest-box">
                  <Form.Check
                    inline
                    label="Memes"
                    name="memes"
                    type={"checkbox"}
                    id={`7`}
                    className="Mintrest-box-check"
                  />
                  <img src="https://i.pinimg.com/originals/5a/ea/dd/5aeadd53ab6157ab11a74a4b5ba26b9d.jpg" />
                </div>
                <div className="Mintrest-box">
                  <Form.Check
                    inline
                    label="Arts"
                    name="art"
                    type={"checkbox"}
                    id={`8`}
                    className="Mintrest-box-check"
                  />
                  <img src="https://thedavidsnider.com/wp-content/uploads/2021/01/istockphoto-577949148-612x612-1.jpg" />
                </div>
                <div className="Mintrest-box">
                <Form.Check
                inline
                label="Trees"
                name="tree"
                type={"checkbox"}
                id={`9`}
                className="Mintrest-box-check"
              />
              <img src="https://images.unsplash.com/photo-1462143338528-eca9936a4d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjIyNjB8MHwxfHNlYXJjaHwzfHx0cmVlc3xlbnwwfHx8fDE2MzIyNjUxMDk&ixlib=rb-1.2.1&q=80&w=200" />
            </div>
            <div className="Mintrest-box">
              <Form.Check
                inline
                label="Colors"
                name="color"
                type={"checkbox"}
                id={`10`}
                className="Mintrest-box-check"
              />
              <img src="https://images.ctfassets.net/cnu0m8re1exe/7bvBF6E4WXVLLIsH88lXcC/5a3b7483a82fb30248e7d1c7856be6ec/20-things-color.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" />
            </div>
              </div>

              <Button
                type="submit"
                variant="danger"
                style={{
                  width: "7em",
                  borderRadius: "5em",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "1.5em",
                  marginBottom:"1.5em"
                }}
              >
                Save
              </Button>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    );
  }
}

export default Intrest;
