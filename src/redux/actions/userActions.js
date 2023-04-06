import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
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
import { clearAlert, clearValues } from "./alart";
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
  clearValues();
  clearAlert()
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

    // Dispatch success action with user data
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userCredential.userLogin,
    });
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
    const { user } = await signInWithPopup(auth,googleAuthProvider);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const loginWithFacebook = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { user } = await signInWithPopup(auth,facebookAuthProvider);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
}

export const logout = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: USER_LOGOUT,
  });
};
