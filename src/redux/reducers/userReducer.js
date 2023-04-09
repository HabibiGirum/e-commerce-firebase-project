// userReducer.js

import {
  userConstants,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
 
} from "../constants/userConstants";
const initialState = {
  user: null,
  loading: false,
  error: null,
  success: '',
  name: "admin",
  permissions: {
    canEditProducts: true,
    canDeleteProducts: true,
    canManageUsers:true
  }
  
}








export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return { loading: true };
    case userConstants.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload,success:"Registration Successful! " };
    case userConstants.USER_REGISTER_FAILURE:
      return { loading: false, error: action.payload };
    case userConstants.USER_ROLE_SET:
      return{...state,userRole:action.payload}
    default:
      return state;
  }
};




export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
      
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        success:"Login successful!...",
        error: null,
        
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        userLogin: null,
        loading: false,
        error: action.payload,
      };
    
    default:
      return state;
  }
};


