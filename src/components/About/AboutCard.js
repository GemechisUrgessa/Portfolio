import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import Tilt from "react-parallax-tilt";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaTools,
  FaBlockchain,
  FaRobot,
  Fa500Px,
} from "react-icons/fa";

function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and modern web applications using React, Next.js, and more.",
      icon: <FaCode />,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile apps with Flutter and React Native.",
      icon: <FaMobileAlt />,
    },
    {
      title: "API Design & Integration",
      description:
        "Designing robust APIs and integrating third-party services seamlessly.",
      icon: <FaServer />,
    },
    {
      title: "Database Management",
      description:
        "Managing databases like MongoDB, PostgreSQL with a focus on scalability.",
      icon: <FaDatabase />,
    },
    {
      title: "DevOps & CI/CD",
      description:
        "Setting up CI/CD pipelines, automating deployments using Docker, Jenkins, and Kubernetes.",
      icon: <FaTools />,
    },
    {
      title: "Blockchain Development",
      description:
        "Developing decentralized apps and smart contracts on Ethereum and other platforms.",
      icon: <Fa500Px />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Integrating machine learning models into applications for intelligent automation.",
      icon: <FaRobot />,
    },
  ];

  return (
    <Container fluid className="services-section">
      <div className="service-card-section">
        {services.map((service, index) => (
          <div key={index} className="service-card-wrapper">
            <Tilt>
              <Card className="service-card">
                <Card.Body>
                  <div className="service-icon">{service.icon}</div>
                  <Card.Title className="purple">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Tilt>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ServicesPage;
