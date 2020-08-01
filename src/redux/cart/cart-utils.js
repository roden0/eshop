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