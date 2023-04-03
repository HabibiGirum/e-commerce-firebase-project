import React from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import fireDB from "../FireConfig";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    getData();
  }, []);
 
  async function getData() {
    try {
      const data = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      data.forEach((doc) => {
        const productObject = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(productObject);
      });
      console.log(productsArray);
      setProducts(productsArray);
    } catch (error) {
      console.log("Error getting documents: ", error);
    }
  }
  
  return (
    <>
      <h3>Latest Products</h3>
      {products ? (<Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>) : (
          <h3>Loading...</h3>
      )}
    </>
  );
};

export default HomeScreen;
