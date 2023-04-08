import {
  auth,
  googleAuthProvider,
} from "../../FireConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import {
  userConstants,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";
import { CLEAR_ALERT } from "../constants/alert";

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    dispatch({
      type: userConstants.USER_REGISTER_SUCCESS,
      payload: userCredential.userRegister,
    });
    dispatch({
      type:CLEAR_ALERT
    })
  } catch (error) {
    dispatch({
      type: userConstants.USER_REGISTER_FAILURE,
      payload: error.message,
    });
  }
  localStorage.setItem('userRegister', JSON.stringify(userConstants))
};
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    // Call Firebase Authentication API to log in the user
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    localStorage.setItem('userInfo', JSON.stringify(userCredential))
    
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userCredential.userLogin,
      
    });
    console.log(localStorage.getItem('userInfo'));

  } catch (error) {
    // Dispatch failure action with error message
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { user } = await signInWithPopup(auth, googleAuthProvider);
   
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
      
    });

    localStorage.setItem('userInfo', JSON.stringify(user))

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
      
    });
  }
};
// 

export const logout = () => async (dispatch) => {
  await auth.signOut();
  const link =window.location.href='/'
  dispatch({
    type: USER_LOGOUT,
    link:link
  });
};
