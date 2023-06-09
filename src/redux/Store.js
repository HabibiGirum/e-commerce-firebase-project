import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
  productTopRatedReducer,
  productDeleteReducer,
  productCreateReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducers";

import {
  userLoginReducer,
  userRegisterReducer,
} from "../redux/reducers/userReducer";

const middleware = [thunk];
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate:productCreateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  productTopRated: productTopRatedReducer,
});

const { cartItemsFromStorage } = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const { userInfoFromStorage } = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];



const initialState = {
  cart: {
    //cartItems:cartItemsFromStorage
    cartItems: Array.isArray(cartItemsFromStorage) ? cartItemsFromStorage : [],
    // shippingAddress: shippingAddressFromStorage,
  },

  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  userLogin: { userInfo: userInfoFromStorage },
};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
