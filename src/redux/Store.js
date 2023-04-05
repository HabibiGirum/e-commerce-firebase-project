import { createStore, applyMiddleware,combineReducers } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { productListReducer ,productDetailsReducer} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducers";
const middleware = [thunk]
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart:cartReducer

})

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = { 
  cart: {
    cartItems: cartItemsFromStorage,
    // shippingAddress: shippingAddressFromStorage,
  },

  cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
}
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store

// steps action , reducer, component