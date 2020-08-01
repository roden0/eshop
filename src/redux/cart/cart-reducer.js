import { CartActionTypes } from './cart-types';

const INITIAL_STATE = {
    hidden: true
};

const cartReducer = (state=INITIAL_STATE, action) =>{
    let newState;
    switch(action.type){
        case CartActionTypes.TOGGLE_CART:
            newState = {
                ...state,
                hidden: !state.hidden
            }
        break;
        default:
            newState = state;
        break;
    }
    return newState;
}

export default cartReducer;