import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  loginWithFacebook,
  loginWithGoogle,
} from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import { Image, Form, Button, Alert, Card, Col, Row } from "react-bootstrap";
import Wrapper from "../components/Wrapper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const show = () => {
    if (true) {
      return <Alert />;
    } else {
      return;
    }
  };
  useEffect(() => {
    if (true) {
      show(true);
      setTimeout(() => show(false), 3000);
    }
  });
  useEffect(() => {
    if (error || loading || userLogin) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [error, userLogin, loading]);
  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  const handleFacebookLogin = () => {
    dispatch(loginWithFacebook());
  };

  return (
    <Wrapper>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="my-4 ">
            <Form onSubmit={submitHandler} className="p-1">
              <h2 className="mb-2 text-center">Login</h2>
              {loading ? showAlert && show && <p>Loading...</p> : ""}
              {error
                ? showAlert &&
                  show && (
                    <p className="text-danger">
                      login fail check either password or email
                    </p>
                  )
                : ""}
              {userLogin
                ? showAlert &&
                  show && <p className="text-success">Login successful!</p>
                : ""}
              
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
              <h4>Or sign up with</h4>
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
              <Button
                onClick={handleFacebookLogin}
                className=" login-with-facebook "
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/32px-Facebook_icon.svg.png"
                  alt="Facebook"
                ></Image>
                <span> login with facebook </span>
              </Button>
             <h5> If you have not an account?</h5>
              <Link to="/register">Register</Link>
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
