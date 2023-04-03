import React from "react";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Wrapper from "../components/Wrapper";
import { Link, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import fireDB from "../FireConfig";

const Product = () => {
  const params = useParams();
  
  const [data, setProduct] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
   try {
     const productTemp = await getDoc(doc(fireDB, "products", params.id));
     setProduct(productTemp.data());
   } catch (error) {
    console.log(error);
   }
  }
  
  

  return (
    <Wrapper>
      <main className="py-3">
        <Container>
          <Link className="btn btn-dark my-3" to="/">
            Back to Home
          </Link>
          {data ? (
            <Row>
              
                <Col md={6}>
                  <Image
                    src={data.image}
                    alt={data.name}
                    fluid
                    className="hover"
                  />
                </Col>
              
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{data.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating
                      value={data.rating}
                      text={`${data.numReviews} reviews`}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: ${data.price}</ListGroup.Item>
                  <ListGroup.Item>
                    Description: {data.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${data.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {data.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button
                        className="btn btn-dark  wide-button"
                        type="button"
                        disabled={data.countInStock === 0}
                      >
                        {data.countInStock > 0
                          ? "Add to Cart"
                          : "Out of Stock"}
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          ) : (
            <p>Loading...</p>
          )}
        </Container>
      </main>
    </Wrapper>
  );
  
};

export default Product;
