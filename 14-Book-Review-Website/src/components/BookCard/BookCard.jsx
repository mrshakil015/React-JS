import { FaUsers, FaRegCalendarAlt, FaRegStar   } from "react-icons/fa";
import { TbPageBreak } from "react-icons/tb";

const BookCard = ({ book }) => {
    const { bookId, bookName, author, image, category, totalPages, rating, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="card flex flex-col md:flex-row justify- gap-6 p-6 bg-base-100 border rounded-2xl">
            <figure className="p-6 bg-slate-50 md:w-[230px] flex items-center justify-center rounded-2xl">
                <img
                    src={image}
                    alt="books"
                    className="h-[150px] rounded-xl" />
            </figure>
            <div className="flex-grow text-left mt-2">


                <h2 className="text-2xl font-bold">{bookName}</h2>
                <p className="font-medium">By: {author}</p>
                <div className="flex flex-col md:flex-row gap-4 justify-start md:items-center">
                    <p className="font-bold">Tags:</p>
                    <div className="flex">
                        {
                            tags.map((tag, idx) => (
                                <button key={idx} className="bg-[#f6fff4] px-4 py-2 text-xs m-2 text-[#23BE0A] font-medium">
                                    #{tag}
                                </button>
                            ))
                        }
                    </div>
                    <p className="flex gap-3 items-center"><FaRegCalendarAlt className="text-xl"></FaRegCalendarAlt>Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="flex flex-col md:flex-row md:gap-16">
                    <p className="flex gap-3 items-center"><FaUsers className="text-xl"></FaUsers>Publisher: {publisher}</p>
                    <p className="flex gap-3 items-center"><TbPageBreak className="text-xl"></TbPageBreak>Page: {totalPages}</p>
                </div>
                <hr className="my-2 border-dashed" />
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex flex-row">
                    <button className="bg-[#e0eeff] flex-grow rounded-full px-4 py-2 m-2 text-[#328EFF] font-medium">Category: {category}</button>
                    <button className="bg-[#fff3e0] flex-grow rounded-full px-4 py-2 m-2 text-[#FFAC33] font-medium">Rating: {rating}</button>
                    </div>
                    <button className="btn py-2 m-2 rounded-full bg-[#23BE0A] px-6 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;