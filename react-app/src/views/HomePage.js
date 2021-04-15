import React, { Component } from "react";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../index.css";
import Image1 from "../images/slider1.png";
import Image2 from "../images/slider2.jpg";
import Image3 from "../images/slider3.jpg";
import { Link } from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
      <div className="hedaer-style" style={{position: "absolute", left: 0, top: 110, width: "100%"}}>

        <h1 className="header-home">Welcome to Singhealth App</h1>

        <div
          style={{
            position: "absolute",
            left: 0,
            top: 110,
            width: "100%",
          }}
        >
          <Carousel>
            <Carousel.Item>
              <img width={"100%"} src={Image1} />
              <Carousel.Caption>
                <h1>SingHealth E-services</h1>
                <p>Register for today's clinic visit!!</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img width={"100%"} src={Image2} />
              <Carousel.Caption>
                <h1>SingHealth Duke-NUS Disease Centres</h1>
                <p>
                  The SingHealth Duke-NUS Disease Centres (SDDCs) brings
                  together specialist expertise within SingHealth into dedicated
                  centres to offer integrated and multidisciplinary care at
                  multiple sites across SingHealth institutions.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img width={"100%"} src={Image3} />
              <Carousel.Caption>
                <h1>Regional Health System</h1>
                <p>
                  Beyond care in hospitals, patients often need follow-up care
                  in the community. To achieve this, SingHealth works closely
                  with care providers across the continuum to enable patients to
                  be cared for adequately at home and in the community.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>


        <Link to={{pathname:"/home-log-reg"}}>
        <Button
          variant="light"
          style={{
            position: "absolute",
            left:"10%",
            width:"80%"
          }}
        >
          <AiIcons.AiOutlineLogin size="20" /> Login
        </Button>
        </Link>

      </div>
    );
  }
}

export default HomePage;
/*
top: -10,

*/
