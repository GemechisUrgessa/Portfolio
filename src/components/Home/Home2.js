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

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                Through my passion for programming, I have gained extensive experience in a variety of programming languages, 
                including <i>
                <b className="purple"> C++, C, Dart, Javascript, HTML, CSS, Python, C#, Java, Rust, GO, React, Node.js and DJango. </b>
              </i> I am particularly interested in 
                developing new web technologies and products, as well as exploring the potential of <b className="purple">blockchain and AI.</b> 
                 I have a strong background in <b className="purple"> MERN stack development</b>, and I am proficient in modern Javascript libraries 
                 and frameworks such as <b className="purple"> React.js and Next.js.</b> I am always eager to learn and expand my skillset,
                  and I am committed to delivering high-quality products that meet the needs of my clients and users.
              {/* <br />
              <br />I am fluent in classics like
              
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain and AI.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">MERN stack</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
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
