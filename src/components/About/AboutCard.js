import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
// import "animate.css"; // Import animate.css for animations
// import "./AboutCard.css"; // Import a custom CSS file for additional styling

function AboutCard() {
  return (
    <Card className="quote-card-view animate__animated animate__fadeIn">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gemechis Urgessa</span>
            from <span className="purple">Ethiopia.</span>
            <br /> I am a final year student pursuing B.sc in Software
            Engineering from Addis Ababa Institute of Technology.
            <br />
            Additionally, I am currently employed as a software Engineer and
            Researcher at UM.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring new places
            </li>
          </ul>

          <p className="motto">
            "Strive to create things that can make a difference!"
          </p>
          <footer className="blockquote-footer">Gemechis Urgessa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
