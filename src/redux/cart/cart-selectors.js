import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.items
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    items => items.reduce((totalPrice,item)=> totalPrice + (item.price * item.quantity), 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectItemCount = createSelector(
    [selectCartItems],
    items => items.reduce((totalItems, item) => totalItems + item.quantity ,0)
);