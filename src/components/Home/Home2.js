import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import "./Home2.css"; // Import a custom CSS file for additional styling

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="heading-intro">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionate in programming, I excel in{" "}
              <span className="purple">
                C++, Dart, Javascript, GO, Rust, Java, C , Python
              </span>
              , and more. My interest lies in{" "}
              <span className="purple">web technologies</span>,{" "}
              <span className="purple">blockchain</span>, and{" "}
              <span className="purple">AI</span>. Proficient in{" "}
              <span className="purple">MERN stack</span> and frameworks like{" "}
              <span className="purple">React.js</span>. Committed to delivering
              quality products, I am on a continual journey of learning and
              growth.
            </p>
          </Col>
          <Col md={4} className="my-avatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
