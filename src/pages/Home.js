import React, { useState } from "react";
import Product from "../components/Product";
import { Form, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../components/Wrapper";
import { listProducts } from "../redux/actions/productActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import ProductCarousel from "../components/ProductCarousel";

const Home = (props) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const [searchKey, setSearchKey] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Wrapper>
      <ProductCarousel />

      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="py-2">
          <h3>Products</h3>
          <InputGroup className="mb-3">
            <FormControl
              size="sm"
              className="search-input"
              placeholder="Search item"
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
            />
            <Form.Select
              size="sm"
              className="filter-select"
              aria-label="Filter by category"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            >
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Mouse">Mouse</option>
              <option value="Iphone">Iphone</option>
              <option value="Headphones">Headphones</option>
            </Form.Select>
              </InputGroup>
             
          {products
            .filter((obj) => obj.name.includes(searchKey))
            .filter((obj) => (filter === "" ? true : obj.category === filter))
            .map((product, index) => (
              <Col
                key={product.id || index}
                sm={12}
                md={6}
                xl={3}
                className="my-2"
              >
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
    </Wrapper>
  );
};

export default Home;
