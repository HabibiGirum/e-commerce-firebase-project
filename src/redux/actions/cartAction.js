import {getDocs, collection } from "firebase/firestore";
import fireDB from "../../FireConfig";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {

  const { docs } = await getDocs(collection(fireDB, "products"));
  const data = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(data);
  const product = data.find((p) => p.id === id);

  if (product) {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty,
      },
    });
  }
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

