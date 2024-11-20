import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Register = () => {
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
        <h2 style={headingStyle}>Registration Form</h2>
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

          {/* USN Field */}
          <Row className="mb-4">
            <Col>
              <Form.Group controlId="usn">
                <Form.Label style={{ color: "white" }}>USN</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter USN"
                  required
                  style={inputStyle}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Semester and Section */}
          <Row className="mb-4">
            <Col>
              <Form.Group controlId="semester">
                <Form.Label style={{ color: "white" }}>Semester</Form.Label>
                <Form.Select required style={inputStyle}>
                  <option value="" style={{ color: "black" }}>
                    Select Semester
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <option key={sem} value={sem} style={{ color: "black" }}>
                      {sem}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="section">
                <Form.Label style={{ color: "white" }}>Section</Form.Label>
                <Form.Select required style={inputStyle}>
                  <option value="" style={{ color: "black" }}>
                    Select Section
                  </option>
                  {["A", "B", "C", "D", "E", "F"].map((sec) => (
                    <option key={sec} value={sec} style={{ color: "black" }}>
                      {sec}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Mobile Number */}
          <Row className="mb-4">
            <Col>
              <Form.Group controlId="mobile">
                <Form.Label style={{ color: "white" }}>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Mobile Number"
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
              </Form.Group>
            </Col>
          </Row>

          {/* Domain */}
          <Row className="mb-4">
            <Col>
              <Form.Group controlId="domain">
                <Form.Label style={{ color: "white" }}>Domain of Interest</Form.Label>
                <Form.Select required style={inputStyle}>
                  <option value="" style={{ color: "black" }}>
                    Select Domain
                  </option>
                  <option value="App Development" style={{ color: "black" }}>
                    App Development
                  </option>
                  <option value="Web Development" style={{ color: "black" }}>
                    Web Development
                  </option>
                  <option value="Competitive Programming" style={{ color: "black" }}>
                    Competitive Programming
                  </option>
                  <option value="Data Science" style={{ color: "black" }}>
                    Data Science & Machine Learning
                  </option>
                </Form.Select>
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
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
