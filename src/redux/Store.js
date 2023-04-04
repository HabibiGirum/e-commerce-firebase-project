import { createStore, applyMiddleware,combineReducers } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { productListReducer ,productDetailsReducer} from "./reducers/productReducer";
const middleware = [thunk]
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer

})


const initialState={ }
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store