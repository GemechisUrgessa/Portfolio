import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo send the message to my email
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container fluid className="contact" id="contact">
      <h1
        className="project-heading"
        style={{ paddingBottom: "20px", textAlign: "center" }}
      >
        <strong className="purple">Contact</strong> Me
      </h1>
      <Form name="contact">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "6px",
          }}
        >
          <Form.Group as={Col} controlId="formGridName flex">
            <Form.Label className="label">Name</Form.Label>
            <Form.Control
              style={{
                maxWidth: "400px",
                width: "500px",
              }}
              type="text"
              name="name"
              required
              onChange={handleNameChange}
              value={name}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              style={{
                maxWidth: "400px",
              }}
              type="email"
              name="email"
              required
              onChange={handleEmailChange}
              value={email}
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            style={{
              maxWidth: "400px",
            }}
            as="textarea"
            name="message"
            required
            onChange={handleMessageChange}
            value={message}
          />
        </Form.Group>
        {name && email && message ? (
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button variant="primary" type="submit" disabled>
            Submit
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default Contact;
