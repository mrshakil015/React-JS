import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, category, rating, tags } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="flex flex-col p-6 bg-base-100 border rounded-2xl h-full">
                <figure className="p-6 bg-slate-50 flex items-center justify-center rounded-2xl">
                    <img
                        src={image}
                        alt="books"
                        className="h-[166px] rounded-xl" />
                </figure>

                <div className="flex-grow text-left mt-2 space-y-2">
                    <div>
                        {
                            tags.map((tag, idx) => (
                                <button key={idx} className="bg-[#f6fff4] px-4 py-2 text-xs m-2 text-[#23BE0A] font-medium">
                                    {tag}
                                </button>
                            ))
                        }
                    </div>

                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p className="font-medium">By: {author}</p>
                    <hr className="my-2 border-dashed" />
                </div>
                <div className="flex justify-between font-medium">
                    <p>{category}</p>
                    <p className="flex gap-2">{rating} <CiStar className="text-2xl"></CiStar></p>
                </div>
            </div>

        </Link>
    );
};

export default Book;