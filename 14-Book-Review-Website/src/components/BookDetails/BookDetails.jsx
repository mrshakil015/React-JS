import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId)

    const book = books.find(book => book.bookId === bookIdInt);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    return (
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 gap-12 my-12">
            <figure className="p-6 bg-[#d2edcc] flex items-center justify-center rounded-2xl">
                <img
                    src={image}
                    alt="books"
                    className="h-[564px] rounded-xl" />
            </figure>
            <div className="space-y-3">
                <h2 className="text-4xl font-bold">{bookName}</h2>
                <p className="font-medium">By: {author}</p>
                <hr className="my-2 border-dashed" />
                <p>{category}</p>
                <hr className="my-2 border-dashed" />
                <p><strong>Review: </strong>{review}</p>
                <div className="flex items-center">
                    <p className="font-bold text-black">Tag</p>
                    {
                        tags.map((tag, idx) => (
                            <button key={idx} className="bg-[#f6fff4] px-4 py-2 text-xs m-2 text-[#23BE0A] font-medium">
                                {tag}
                            </button>
                        ))
                    }
                </div>
                <hr className="my-2 border-dashed" />
                <table>
                    <tr>
                        <td>Number of Pages:</td>
                        <td className="pl-5 font-semibold">{totalPages}</td>
                    </tr>
                    <tr>
                        <td>Publisher:</td>
                        <td className="pl-5 font-semibold">{publisher}</td>
                    </tr>
                    <tr>
                        <td>Year of Publishing:</td>
                        <td className="pl-5 font-semibold">{yearOfPublishing}</td>
                    </tr>
                    <tr>
                        <td>Rating:</td>
                        <td className="pl-5 font-semibold">{rating}</td>
                    </tr>
                </table>
                <hr className="my-2 border-dashed" />
                <div className="flex gap-4 mt-4">
                    <button className="btn bg-white px-6">Read</button>
                    <button className="btn bg-[#59c6d2] px-6 text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;