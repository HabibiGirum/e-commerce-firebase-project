import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import Wrapper from "../components/Wrapper";
const Login = () => {
  const submitHandler = () => {
    return null;
  };
  return (
    <Wrapper>
      <main className="py-3">
        <Container>
          <FormContainer>
            <Row>
              <Col>
                <h1>Sign In</h1>
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="email@gmail.com"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="password"
                    ></Form.Control>
                  </Form.Group>
                  <Button
                    type="submit"
                    className="btn btn-dark m-2"
                    variant="primary"
                  >
                    Sign In
                  </Button>
                </Form>
                <Row className="py-3">
                  <Col>
                    New Customer?{" "}
                    <Link to="/register" className="black-link">
                      Register
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col>
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_hu9cd9.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </Col>
            </Row>
          </FormContainer>
        </Container>
      </main>
    </Wrapper>
  );
};

export default Login;
