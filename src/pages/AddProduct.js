import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";
import { createProduct } from "../redux/actions/productActions";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [numReviews, setNumReviews] = useState(0);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");

  const orderHandler = (e) => {
    e.preventDefault();
    const product = {
      name,
      brand,
      category,
      description,
      countInStock,
      numReviews,
      price,
      rating,
      image,
    };
    console.log(product);
    dispatch(createProduct(product));
  };

  return (
    <>
      <AdminHeader />
      <Card className=" mx-auto my-2" style={{ maxWidth: "1000px" }}>
        <Form onSubmit={orderHandler}>
          <Row>
            <Row>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBrand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formCountInStock">
                  <Form.Label>Count In Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter count in stock"
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formNumReviews">
                  <Form.Label>Number of Reviews</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter number of reviews"
                    value={numReviews}
                    onChange={(e) => setNumReviews(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formRating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formImage">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="btn btn-dark">
              Submit
            </Button>
          </Row>
        </Form>
      </Card>
      <Footer />
    </>
  );
};

export default AddProduct;
