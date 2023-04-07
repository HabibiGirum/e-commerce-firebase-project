
import { CLEAR_ALERT, CLEAR_VALUES } from '../constants/alert';
    export const clearValues = ()=> async(dispatch) => {
        dispatch({ type: CLEAR_VALUES });
    };
      
    export const clearAlert = () => async(dispatch) =>{
        setTimeout(() => {
          dispatch({
            type: CLEAR_ALERT,
          });
        }, 3000);
      };