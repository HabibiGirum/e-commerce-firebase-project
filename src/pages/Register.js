import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Form, Row, Col,Button } from "react-bootstrap";
import Message from "../components/Message";
import Loading from "../components/Loading";
import FormContainer from "../components/FormContainer";
import Wrapper from "../components/Wrapper";
const Register = () => {
  return (
    <Wrapper>
      <h1>Sign Up</h1>
      <FormContainer>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name"></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>email address</Form.Label>
            <Form.Control type="email" placeholder="Enter name"></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter name"
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary" className="btn btn-dark m-2">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account? <Link to="/login"  className="black-link">Login</Link>
          </Col>
        </Row>
      </FormContainer>
    </Wrapper>
  );
};

export default Register;
