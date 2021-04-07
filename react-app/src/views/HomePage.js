import React, { Component } from 'react';
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import { Button, Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../index.css";
import Image1 from '../images/slider1.jpeg';
import Image2 from '../images/slider2.jpeg';

class HomePage extends Component {
    render() { 
        return (
            <div class="header-style">
                
                <h1 className="header-home">Welcome to Singhealth App</h1>
                
                
                <div style={{
                position: "absolute",
                left: 0,
                top: 110,
                width: "100%",
                }}>

                <Carousel >
                <Carousel.Item>
                    <img width={900} height={500} src={Image1}/>
                    <Carousel.Caption>
                    <h1>First slide label</h1>
                    <p>Some description here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img width={900} height={500} src={Image2}/>
                    <Carousel.Caption>
                    <h1>Second slide label</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img width={900} height={500} src={Image1}/>
                    <Carousel.Caption>
                    <h1>Third slide label</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </div>



                <Button variant="light" style={{
                    position: "absolute",
                    right: 20,
                    top:20
                    
                }}>
                    <AiIcons.AiOutlineLogout size="20"/> Logout
                </Button>

            </div>
        
        
        
        
        
        );
    }
}
 
export default HomePage;
/*
<p style={{position: "absolute", left: 20, top: 130}}>
                    App
                </p>


*/