import { createContext } from 'react';

const CartContext = createContext({
    hidden: true,
    toggleHidden: ()=>{},
    addItem: ()=>{},
    removeItem: ()=>{},
    items: [],
    clearItem: ()=>{} 
});

export default CartContext;