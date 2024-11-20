import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function Contact() {
  const formContainerStyle = {
    backgroundColor: "rgba(25, 28, 34, 0.1)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    maxWidth: "700px",
    margin: "auto",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    marginBottom:"80px"
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "30px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    color: "white",
    fontSize: "24px",
  };

  const inputStyle = {
    background: "rgba(255, 255, 255, 0.15)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    color: "white",
    borderRadius: "8px",
    padding: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    border: "none",
    fontSize: "18px",
    padding: "12px 20px",
    width: "100%",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <Container className="py-3">
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <Form>
          {/* Name Fields */}
          <Row className="mb-4">
            <Col>
              <Form.Group controlId="firstName">
                <Form.Label style={{ color: "white" }}>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  required
                  style={inputStyle}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastName">
                <Form.Label style={{ color: "white" }}>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  required
                  style={inputStyle}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Email */}
          <Row className="mb-4">
            <Col>
              <Form.Group controlId="email">
                <Form.Label style={{ color: "white" }}>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  required
                  style={inputStyle}
                />
                <Form.Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Please use a valid email address.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          {/* Subject */}
          <Row className="mb-4">
            <Col>
              <Form.Group controlId="subject">
                <Form.Label style={{ color: "white" }}>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Subject"
                  required
                  style={inputStyle}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Message */}
          <Row className="mb-4">
            <Col>
              <Form.Group controlId="message">
                <Form.Label style={{ color: "white" }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  required
                  style={inputStyle}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Submit Button */}
          <Row>
            <Col>
              <Button
                style={buttonStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                }
                type="submit"
              >
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default Contact;
