import React, {
    createContext,
    useState,
    useEffect
 } from 'react';

import { 
    addItemToCart, 
    removeItemFromCart, 
    removeProductFromCart,
    getItemCount,
    getTotalPrice
 } from './cart-utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: ()=>{},
    items: [],
    addItem: ()=>{},
    removeItem: ()=>{},
    clear: ()=>{},
    itemCount: 0,
    totalPrice: 0,
});

const CartProvider = ({ children })=>{
    const [hidden, setHidden] = useState(true);
    const [items, setItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = item => setItems(addItemToCart(items, item));
    const removeItem = item => setItems(removeItemFromCart(items, item));
    const clear = item => setItems(removeProductFromCart(items, item));
    const toggleHidden = ()=> setHidden(!hidden);

    useEffect(()=>{
        setItemCount(getItemCount(items));
        setTotalPrice(getTotalPrice(items));
    }, [items]);

    return (
    <CartContext.Provider value={{
        hidden,
        toggleHidden,
        items,
        addItem,
        removeItem,
        clear,
        totalPrice,
        itemCount
    }}>
        {children}
    </CartContext.Provider>
)};

export default CartProvider;
