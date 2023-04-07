import {addDoc, collection } from "firebase/firestore";
import fireDB from "../../FireConfig";
import {toast} from 'react-toastify'
import { ADD_ORDER } from "../constants/orderConstant";
import { useState } from "react";



export const addOrder = (order) => async (dispatch) => {
    
    try {
       
        await addDoc(collection(fireDB, 'orders'), order);
       
        
    dispatch({
      type: ADD_ORDER,
        payload: order,
        
      
    });
    } catch (error) {
        
  
  }
};
