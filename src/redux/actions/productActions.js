import {
  getDoc,
  doc,
  getDocs,
  collection,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import fireDB from "../../FireConfig";
import {
  PRODUCT_DETAILS_ERROR,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { docs } = await getDocs(collection(fireDB, "products"));

    const data = docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    // console.log(data);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const docRef = doc(fireDB, "products", id);
    const docSnap = await getDoc(docRef);

    const data = { id: docSnap.id, ...docSnap.data() };
    // console.log(data);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    await deleteDoc(doc(fireDB, "products", id));
    console.log("Product successfully deleted!"); // Add this line to log a message to the console
    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });

    const data = await addDoc(collection(fireDB, "products"), product);

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: message,
    });
  }
};

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST });

    const { docs } = await getDocs(collection(fireDB, "products"));

    const data = docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
