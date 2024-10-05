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
              I am passionate about programming and love to explore new
              technologies. I specialize in{" "}
              <span className="purple">
                C++, Dart, JavaScript, TypeScript, GO, Rust, Java, C, Python
              </span>
              , and I have experience in{" "}
              <span className="purple">web development, blockchain, AI,</span>{" "}
              and frameworks like <span className="purple">React.js</span>,{" "}
              <span className="purple">Node.js</span>.
              <span className="purple">
                {" "}
                Django, Flask, FastAPI, Express.js, Next.js, Nest.js, Spring
              </span>{" "}
              and <span className="purple"> Spring Boot</span>.
              <br />
              <br />I am highly skilled in building applications with{" "}
              <span className="purple">MERN Stack</span> and using databases
              like <span className="purple">MongoDB</span>.
              <br />
              <br />
              Continuously striving to deliver high-quality products, I’m on a
              mission to master cutting-edge technologies like{" "}
              <span className="purple">Docker</span> and{" "}
              <span className="purple">Blockchain</span> to build scalable and
              efficient solutions.
            </p>
            <p className="motto">
              "Strive to create things that can make a difference!"
            </p>
            <footer className="blockquote-footer">Gemechis Urgessa</footer>
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
