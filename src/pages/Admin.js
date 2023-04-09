import React, { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loading from "../components/Loading";

import {
  listProducts,
  deleteProduct,
  
} from "../redux/actions/productActions";

const Admin = () => {


  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const productDelete = useSelector((state) => state.productDelete);
  const { loading: loadingDelete, error: errorDelete } = productDelete;

  const deleteHandler = (id) => {
    console.log(id);
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(id));
      
    }
    // window.location.reload();
  };

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (<>
    <AdminHeader />
      <Row className="align-item-center">
        <Col>
          <h1>Products</h1>
        </Col>
        
      </Row>

      {loadingDelete && <Loading />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm mx-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to="/">
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    <Footer />
    </>
  );
};

export default Admin;
