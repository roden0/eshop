import CartActionTypes from './cart-types';

import { addItemToCart, removeProductFromCart, removeItemFromCart } from './cart-utils';

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
            case CartActionTypes.REMOVE_PRODUCT:
                newState = {
                    ...state,
                    items: removeProductFromCart(state.items, action.payload)
                }
                break;
            case CartActionTypes.REMOVE_ITEM:
                newState = {
                    ...state,
                    items: removeItemFromCart(state.items, action.payload)
                }
                break;
            case CartActionTypes.EMPTY_CART:
                newState = {
                    ...state,
                    items: []
                };
                break;
            default:
                newState ={ ...state};
            break;
        }        
    }catch(e){
        console.error(`CartReducer error: ${e}`);
    }
    return newState;
}

export default cartReducer;