import { addDoc, collection } from "firebase/firestore";
import fireDB from "../../FireConfig";
import { ADD_ORDER } from "../constants/orderConstant";

export const addOrder = (order) => async (dispatch) => {
  try {
    await addDoc(collection(fireDB, "orders"), order);

    dispatch({
      type: ADD_ORDER,
      payload: order,
    });
  } catch (error) {}
};
