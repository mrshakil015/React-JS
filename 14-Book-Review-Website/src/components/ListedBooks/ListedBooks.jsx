import { useLoaderData } from "react-router-dom";
import { getStoredReadBook, getStoredWishlistBook } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readBook, setReadBook] = useState([]);
    const [wishlistBook, setWishlistBook] = useState([]);
    const [showReadBooks, setShowReadBooks] = useState(true);
    const [showWishlistBooks, setShowWishlistBooks] = useState(false)
    const [title, setTitle] = useState('Read Books');

    useEffect(() => {
        const storedReadBookId = getStoredReadBook();
        if (books.length > 0) {
            const readBooks = [];
            for (const id of storedReadBookId) {
                const bookRead = books.find(book => book.bookId === Number(id));
                if (bookRead) {
                    readBooks.push(bookRead);
                }
            }
            setReadBook(readBooks);
        }
    }, [books]);

    useEffect(() =>{
        const storedWishlistBookId = getStoredWishlistBook();
        if (books.length > 0) {
            const wishlistBooks = [];
            for (const wishId of storedWishlistBookId){
                const bookWishlist = books.find(book => book.bookId === Number(wishId));
                console.log('Wish list book: ', bookWishlist);
                if (bookWishlist){
                    wishlistBooks.push(bookWishlist)
                }
            }
            setWishlistBook(wishlistBooks);
        }
    },[books])

    // Toggle the visibility of books
    const handleReadBooks = () => {
        setShowReadBooks(true);
        setShowWishlistBooks(false);
        setTitle('Read Books');

    }

    const handleWishlistBooks = () => {
        setShowWishlistBooks(true);
        setShowReadBooks(false);
        setTitle('Wishlist Books');
    }

    return (
        <div>
            <div className="bg-slate-50 my-5 rounded-2xl py-8">
                <h2 className="text-3xl text-center font-bold">{title}</h2>
            </div>
            <div className="flex gap-3">
                <button onClick={handleReadBooks} className="btn">Read Books</button>
                <button onClick={handleWishlistBooks} className="btn">Wishlist Books</button>
            </div>

            {/* Conditionally render the Read Books section */}
            {showReadBooks && (
                <div className="space-y-6 my-8">
                    {
                        readBook.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                    }
                </div>
            )}

            {showWishlistBooks && (
                <div className="space-y-6 my-8">
                {
                    wishlistBook.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
            )}
        </div>
    );
};

export default ListedBooks;