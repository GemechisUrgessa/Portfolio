import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spam from "../../Assets/Projects/spam.jpeg";
import cultural from "../../Assets/Projects/cultural.png";
import inventory from "../../Assets/Projects/inventory.png";
import laundry from "../../Assets/Projects/Laundry.png";
import medical from "../../Assets/Projects/medical.png";
import shagar from "../../Assets/Projects/shagar.png";
// email spam filter
// laundry web app and mobile app
// Historical and cuktural
// shagar lounge
// inventory system
// Blog post
// world medical record

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spam}
              isBlog={false}
              title="Email spam filter"
              description="Trained a Naive Bayes Classifier using 'SpamAssassin Public Corpus' dataset with Python. The classifier sucessfully predicted the spam and ham emails with an accuracy of 98.5%. The front-end was build using React.js and the back-end was build using Django."
              ghLink="https://github.com/GemechisUrgessa/Email-Spam-Filtering-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cultural}
              isBlog={false}
              title="Historical and Cultural Exploration"
              description="A website for the exploration of historical and cultural places of Ethiopia. The website was build using React.js and the back-end was build using Spring boot."
              ghLink="https://github.com/GemechisUrgessa/web-app-Using-Spring-boot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory Management System"
              description="A web application for the management of inventory of a company. The front-end was build using React.js and the back-end was build using Go. The back-end was dockerized and deployed on AWS EC2 instance."
              ghLink="https://github.com/GemechisUrgessa/React-Inventory-web-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laundry}
              isBlog={false}
              title="Laundry Management System"
          description="A web application for the management of laundry of a company. The front-end was build using React.js and the back-end was build using Spring boot. The mobile application was build using Flutter, The back-end for the mobile application was build using Node.js."
              ghLink="https://github.com/GemechisUrgessa/AAU-Laundry-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medical}
              isBlog={false}
              title="World Medical Record"
              description="A web application for the management of medical records of a patient. The front-end was build using React.js and the back-end was build using Node.js and .net. The back-end was dockerized and deployed on AWS EC2 instance."
              ghLink="https://github.com/GemechisUrgessa/Medical-track"
              demoLink="https://https://www.worldmedicalcard.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shagar}
              isBlog={false}
              title="Shagar Lounge"
              description="A web application for the management of a lounge. The front-end was build using React.js and the back-end was build using Node.js. The web application has a payment gateway integrated."
              ghLink="https://github.com/GemechisUrgessa/Sheger-lounge-web-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
