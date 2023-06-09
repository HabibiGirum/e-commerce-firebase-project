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
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

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
    setTimeout(() => window.location.reload(), 2000);
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
      console.log(userInfo); // log the userInfo variable to the console
      setTimeout(() => {
        window.location.href = "/home";
      });
    }
  }, [isUserInfoLoaded, userInfo]);

  return (
    <>
      <Header />
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
            <Col md={5}>
              <Card className="my-5 my-card">
                <Form onSubmit={handleSubmit} className="p-5">
                  <h2 className="mb-4 text-center">Register</h2>

                  {showAlert &&
                    (error ? (
                      <Alert variant="danger">{error}</Alert>
                    ) : (
                      <Alert variant="success">{success}</Alert>
                    ))}

                  <Form.Group className="col-md-9">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="col-md-9"> 
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="col-md-9">
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
                    className="mt-4 btn btn-dark col-md-9"
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
      <Footer />
    </>
  );
};

export default RegistrationForm;
