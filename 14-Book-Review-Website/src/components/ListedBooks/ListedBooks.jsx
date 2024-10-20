import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readBook, setReadBook] = useState([]);
    const [wishlistBook, setWishlistBook] = useState([]);

    useEffect(() => {
        const storedReadBookId = getStoredReadBook();
        if ( books.length > 0) {
            const readBooks = [];
            for (const id of storedReadBookId) {
                const bookRead = books.find(book => book.bookId === Number(id));
                console.log("Book read", bookRead);
                if (bookRead) {
                    readBooks.push(bookRead);
                }
            }
            setReadBook(readBooks);
        }
    }, [books]);
    return (
        <div>
            <div className="bg-slate-50 my-5 rounded-2xl py-8">
                <h2 className="text-3xl text-center font-bold">Books</h2>
            </div>
            <div className="space-y-6 my-8">
                {
                    readBook.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;