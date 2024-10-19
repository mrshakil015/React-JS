const getStoredReadBook = () =>{
    const storedReadBook = localStorage.getItem('read-books');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveReadBook = id => {
    const storedReadBook = getStoredReadBook();
    const exists = storedReadBook.find(bookId => bookId === id);
    if (!exists) {
        storedReadBook.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBook));
        return false; // Book was added
    }
    return true; // Book was already in the list
}

const getStoredWishlistBook = ()=>{
    const storedWishlistBook = localStorage.getItem('wishlist-books');
    if(storedWishlistBook){
        return JSON.parse(storedWishlistBook);
    }
    return [];
}

const saveWishlistBook = id => {
    const storedWishlistBook = getStoredWishlistBook();
    const wishexists = storedWishlistBook.find(bookId => bookId === id);
    if(!wishexists) {
        storedWishlistBook.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storedWishlistBook));
        return false;
    }
    return true;
}

export {getStoredReadBook, saveReadBook, getStoredWishlistBook, saveWishlistBook}