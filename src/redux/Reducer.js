import React from 'react'
import { BUY_CAKE } from './Action'
const intioalState = {
    numOfCack:10
}
const Reducer = (state = intioalState, action) => {
    switch (action.type===BUY_CAKE) {
        case BUY_CAKE: return {
            ...state,
            numOfCack:state.numOfCack-1
        }
        default:return state
    }

    


}

export default Reducer