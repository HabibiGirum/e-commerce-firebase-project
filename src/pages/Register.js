import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userActions";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, success } = userRegister;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setShowAlert(true);
      return;
    }

    dispatch(register(email, password));
  };

  useEffect(() => {
    if (error) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [success]);

  const [isUserInfoLoaded, setIsUserInfoLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userRegister");
    if (userInfoFromStorage) {
      const parsedUserInfo = JSON.parse(userInfoFromStorage);
      setUserInfo(parsedUserInfo);
    }
    setIsUserInfoLoaded(true);
  }, []);


  useEffect(() => {
    if (isUserInfoLoaded && userInfo) {
      setTimeout(() => {
        window.location.reload();
      },3000);
    }
  }, [isUserInfoLoaded, userInfo]);

  useEffect(() => {
    if (isUserInfoLoaded && userInfo) {
      console.log(userInfo); // log the userInfo variable to the console
      setTimeout(() => {
        window.location.href = "/home";
      },3000);
    }
  }, [isUserInfoLoaded, userInfo]);

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
              <Card className="my-5 my-card">
                <Form onSubmit={handleSubmit} className="p-5">
                  <h2 className="mb-4 text-center">Register</h2>

                  {showAlert &&
                    (error ? (
                      <Alert variant="danger">{error}</Alert>
                    ) : (
                      <Alert variant="success">{success}</Alert>
                    ))}

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

                  <Button
                    type="submit"
                    variant="primary"
                    className="mt-4 btn btn-dark"
                    block
                  >
                    {loading ? "Loading..." : "Register"}
                  </Button>
                  <h5>
                    {" "}
                    If you have an account? <Link to="/">Login</Link>
                  </h5>
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
