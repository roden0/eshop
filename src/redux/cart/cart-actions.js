import CartActionTypes from './cart-types';

export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const removeProduct = item =>({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: item
});

export const emptyCart = ()=>({
    type: CartActionTypes.EMPTY_CART
})