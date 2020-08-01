import { CartActionTypes } from './cart-types';

import { addItemToCart } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    items: []
};

const cartReducer = (state=INITIAL_STATE, action) =>{
    let newState;
    try{
        switch(action.type){
            case CartActionTypes.TOGGLE_CART:
                newState = {
                    ...state,
                    hidden: !state.hidden
                }
            break;
            case CartActionTypes.ADD_ITEM:
                newState = {
                    ...state,
                    items: addItemToCart(state.items, action.payload)
                }
            break;
            default:
                newState = state;
            break;
        }        
    }catch(e){
        console.error(`CartReducer error: ${e}`);
    }
    return newState;
}

export default cartReducer;