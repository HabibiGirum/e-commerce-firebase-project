import React from "react";
import { Card,Container  } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Container>
      {product ? (
        <Card className="mp-3 p-3 rounded">
          <Link to={`/product/${product.id}`}>
            <Card.Img
              src={product.image}
              variant="top"
              className="product-image"
            />
          </Link>

          <Card.Body>
            <Link to={`/product/${product.id}`} className="black-link text-decoration-none">
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as="div">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Card.Text>

            <Card.Text as="h3">${product.price}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>loading...</p>
      )}
    </Container>
  );
};

export default Product;
