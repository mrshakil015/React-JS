const BookCard = ({ book }) => {
    const { bookId, bookName, author, image, category, totalPages, rating, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="card flex flex-row justify- gap-6 p-6 bg-base-100 border rounded-2xl">
            <figure className="p-6 bg-[#d2edcc] w-[230px] flex items-center justify-center rounded-2xl">
                <img
                    src={image}
                    alt="books"
                    className="h-[150px] rounded-xl" />
            </figure>
            <div className="flex-grow text-left mt-2">


                <h2 className="text-2xl font-bold">{bookName}</h2>
                <p className="font-medium">By: {author}</p>
                <div className="flex flex-row gap-4 justify-start items-center">
                    <p className="font-bold">Tags:</p>
                    <div>
                        {
                            tags.map((tag, idx) => (
                                <button key={idx} className="bg-[#f6fff4] px-4 py-2 text-xs m-2 text-[#23BE0A] font-medium">
                                    {tag}
                                </button>
                            ))
                        }
                    </div>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="flex gap-16">
                    <p>Publisher: {publisher}</p>
                    <p>Page: {totalPages}</p>
                </div>
                <hr className="my-2 border-dashed" />
                <div className="flex">
                    <button className="bg-[#e0eeff] rounded-full px-4 py-2 m-2 text-[#328EFF] font-medium">Category: {category}</button>
                    <button className="bg-[#fff3e0] rounded-full px-4 py-2 m-2 text-[#FFAC33] font-medium">Category: {category}</button>
                    <button className="btn py-2 m-2 rounded-full bg-[#23BE0A] px-6 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;