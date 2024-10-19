import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [dataLength, setDataLength] = useState(6)

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <div className="my-20">
            <h2 className="text-5xl font-bold mb-9">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.slice(0, dataLength).map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
            <div className={`${dataLength >= books.length && 'hidden'}`}>
                <button onClick={() => setDataLength(dataLength + 3)} className="btn bg-[#23BE0A] text-white font-bold mt-4">Show More Books</button>
            </div>
        </div>
    );
};

export default Books;