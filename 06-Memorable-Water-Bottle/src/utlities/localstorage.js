// Get data from local storage
const getStoredCart = ()=>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

// Save data to the local storage
const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// add data to the local storage
const addToLocalStorage = id =>{
    const cart = getStoredCart();
    cart.push(id);

    // save to local storage
    saveCartToLocalStorage(cart);
}

// remove from local storage
const removeFromLocalStorage = id =>{
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLocalStorage(remaining)
}

export {addToLocalStorage, getStoredCart, removeFromLocalStorage};