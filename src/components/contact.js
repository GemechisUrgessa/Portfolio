import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
    process.env;

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
    setResponse("");
    if (!handleValidation()) return;
    setSubmitted(true);
    emailjs
      .send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        {
          from_name: name,
          replay_to: email,
          message: message,
        },
        REACT_APP_USER_ID
      )
      .then(
        () => {
          setResponse("Successfully submitted!");
          setSubmitted(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setResponse("Error while submitting!");
          setSubmitted(false);
          console.log(error);
        }
      );
  };

  const handleValidation = () => {
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      setResponse("Name is required!");
    }

    if (!email || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      formIsValid = false;
      setResponse("Please enter a valid email address!");
    }

    if (!message) {
      formIsValid = false;
      setResponse("Message is required!");
    }

    return formIsValid;
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
            {submitted ? "Submitting..." : "Submit"}
          </Button>
        )}
      </Form>
      {response.includes("Successfully") ? (
        <p style={{ color: "green" }}>{response}</p>
      ) : (
        <p style={{ color: "red" }}>{response}</p>
      )}
    </Container>
  );
};

export default Contact;
