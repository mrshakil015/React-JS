import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 rounded-xl p-4">
            <div className='p-4 mb-2 rounded-xl border-2 border-[#6047EC] bg-[#e6e2ff]'>
                <h3 className="text-2xl font-bold text-[#6047EC]">Reading Time: {readingTime} min</h3>
            </div>
            <h2 className='text-3xl font-bold'>Bookmarked Blogs: {bookmarks.length} </h2>            
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};

Bookmarks.prototypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}

export default Bookmarks;