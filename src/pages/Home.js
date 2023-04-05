import React from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../components/Wrapper";
import { listProducts } from "../redux/actions/productActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
const Home = (props) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  // console.log(products);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
 
  return (
    <Wrapper>
      <h3>Latest Products</h3>

      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="py-2">
          {products.map((product,index) => (
            <Col key={product.id ||index} sm={12} md={6} xl={3} className='my-2'>
              <Product product={product} />
             

            </Col>
          ))}
        </Row>
      )}
    </Wrapper>
  );
};

export default Home;
