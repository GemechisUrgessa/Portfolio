import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/demo.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <div
      style={{
        width: "100% !important",
        textAlign: "left",
      }}
    >
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} sm={12} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Gemechis Urgessa </strong>
              </h1>

              <div className="type-container">
                <h1 className="heading-name">I'M</h1>
                <Type />
              </div>
            </Col>

            <Col md={5} sm={12} className="image-col">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid custom-img"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </div>
  );
}

export default Home;
