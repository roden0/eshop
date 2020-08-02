export const addItemToCart = (cartItems, itemToAdd) => {
    
    let finalItems = [...cartItems, {...itemToAdd , quantity: 1}];

    const existingItem = cartItems.find(item=> item.id === itemToAdd.id);

    if (existingItem){
        finalItems = cartItems.map(item=>
             item.id === itemToAdd.id ?
             {...item, quantity: item.quantity + 1} :
             item
            )
    }

    return finalItems;
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    let finalItems = cartItems.map(item=>item.id === itemToRemove.id ? {...item, quantity: item.quantity -1}: item)

    const existingItem = cartItems.find(item=> item.id === itemToRemove.id);

    if (existingItem.quantity === 1){
        return cartItems.filter(item=>item.id !== itemToRemove.id);
    }

    return finalItems;
}

export const removeProductFromCart = (cartItems, itemCleared) => {
    return cartItems.filter(item => item.id !== itemCleared.id)
}