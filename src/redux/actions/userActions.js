import {
  auth,
  
  googleAuthProvider,
} from "../../FireConfig";
import fireDB from "../../FireConfig"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import {addDoc,collection} from  "firebase/firestore";
import {
  userConstants,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
 
} from "../constants/userConstants";
import { CLEAR_ALERT } from "../constants/alert";

export const register = (email, password,role) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });

    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Add a new document with a generated id.
const roleData = await addDoc(collection(fireDB, "users"), {
  name: "Tokyo",
  country: "Japan"
});

    dispatch({
      type: userConstants.USER_REGISTER_SUCCESS,
      payload: {
        email: user.email,
        uid: user.uid,
        role:roleData
      },
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
    const user = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    localStorage.setItem('userInfo', JSON.stringify(user))
    
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user.userLogin,
      
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



