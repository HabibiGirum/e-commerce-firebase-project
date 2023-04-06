import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userActions";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Wrapper from "../components/Wrapper";
const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, user } = userRegister;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(register(email, password));
  };

  return (
    <Wrapper>
      <Container>
        <Col>
          <Row className="justify-content-center">
            <Col>
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_bENSfZ37DY.json"
                background="transparent"
                speed="3"
                loop
                autoplay
              ></lottie-player>
            </Col>
            <Col lg={5}>
              <Card className='my-5 my-card'>
              <Form onSubmit={handleSubmit} className="p-5">
                <h2 className="mb-4 text-center">Register</h2>

                {loading && <p>Loading...</p>}
                {error && <p className="text-danger">{error}</p>}
                {user && (
                  <p className="text-success">Registration successful!</p>
                )}

                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-4 btn btn-dark" block>
                  Register
                </Button>
                </Form>
                </Card>
            </Col>
          </Row>
        </Col>
      </Container>
    </Wrapper>
  );
};

export default RegistrationForm;
