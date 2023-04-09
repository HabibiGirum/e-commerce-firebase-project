import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, loginWithGoogle } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import { Image, Form, Button, Alert, Card, Col, Row } from "react-bootstrap";
import Wrapper from "../components/Wrapper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, success } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    setTimeout(() => window.location.reload(), 2000);
  };
  const [isUserInfoLoaded, setIsUserInfoLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo");
    if (userInfoFromStorage) {
      const parsedUserInfo = JSON.parse(userInfoFromStorage);
      setUserInfo(parsedUserInfo);
    }
    setIsUserInfoLoaded(true);
  }, []);

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

  useEffect(() => {
    if (isUserInfoLoaded && userInfo) {
      setTimeout(() => {
        window.location.href = "/home";
      });
    }
  }, [isUserInfoLoaded, userInfo]);

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <Wrapper>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="my-4 my-card">
            <Form onSubmit={submitHandler} className="p-1">
              <h2 className="mb-2 text-center">Login</h2>
              {showAlert &&
                (error ? (
                  <Alert variant="danger">{error}</Alert>
                ) : (
                  <Alert variant="success">{success}</Alert>
                ))}

              {/* added alert message */}
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="my-2 btn btn-dark"
              >
                {loading ? "Loading..." : "Login"}
              </Button>
              <hr />
              <span>Or sign up with</span>
              <hr />
              <Button
                onClick={handleGoogleLogin}
                className="my-1 login-with-google  btn btn-dark"
              >
                <Image
                  src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg"
                  alt="Google logo"
                ></Image>
                <span> Login with Google</span>
              </Button>

              <h5>
                {" "}
                If you have not an account? <Link to="/register">Register</Link>
              </h5>
            </Form>
          </Card>
        </Col>

        <Col md={5}>
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_hu9cd9.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Login;
