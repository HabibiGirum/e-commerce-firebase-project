import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Form, Row, Col, Button } from "react-bootstrap";
import Message from "../components/Message";
import Loading from "../components/Loading";
import FormContainer from "../components/FormContainer";
import Wrapper from "../components/Wrapper";
const Register = () => {
  return (
    <Wrapper>
      <h1>Sign Up</h1>
      <Form className="register-parent">
        <Row>
          <Col md={5}>
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_bENSfZ37DY.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </Col>
          <Col md={5}></Col>
        </Row>
      </Form>
    </Wrapper>
  );
};

export default Register;
