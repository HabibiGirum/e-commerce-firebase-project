import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
  Modal,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";
import Wrapper from "../components/Wrapper";
import { addOrder } from "../redux/actions/orderAction";
const Cart = ({ props }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const qty = new URLSearchParams(location.search).get("qty") || 1;
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.userLogin);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const { user } = user;
  const { cartItems } = cart;
  console.log(cartItems.qty);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);

    dispatch(removeFromCart(index));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const orderHandler = () => {
    const order = {
      name,
      address,
      phoneNumber,
      cartItems,
      user,
    };
    console.log(order);
    dispatch(addOrder(order));

    handleClose();
  };
  return (
    <Wrapper>
      <main className="py-3 ">
        <Container>
          <Row>
            <Col md={8}>
              <h1>Shopping Cart</h1>
              {cartItems.length === 0 ? (
                <Message>
                  Your cart is empty <Link to="/home">Go Back</Link>
                </Message>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((item) => (
                    <ListGroup.Item key={item.id}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col md={3}>
                          <Link
                            to={`/product/${item.id}`}
                            className="black-link text-decoration-none"
                          >
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={2}>${item.price}</Col>
                        <Col md={2}>
                          <Form.Control
                            as="select"
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.id, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                        <Col md={2}>
                          <Button
                            type="button"
                            variant="light"
                            onClick={() => removeFromCartHandler(item.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>
                      Subtotal (
                      {cartItems.reduce(
                        (acc, item) => acc + parseInt(item.qty),
                        0
                      )}
                      ) items
                    </h2>
                    $
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-dark  wide-button"
                      disabled={cartItems.length === 0}
                      onClick={handleShow}
                    >
                      Proceed To Checkout
                    </Button>

                    <Modal
                      show={show}
                      onHide={handleClose}
                      {...props}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Order form </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group>
                            <Form.Label>name:</Form.Label>
                            <Form.Control
                              type="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </Form.Group>

                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address:</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              type="address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              required
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control
                              placeholder="phone number"
                              type="number"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              required
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button onClick={orderHandler} className="btn btn-dark">
                          Order
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </Wrapper>
  );
};

export default Cart;
