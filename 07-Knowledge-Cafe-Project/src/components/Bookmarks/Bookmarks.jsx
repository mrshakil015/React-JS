import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 rounded-xl p-4">
            <h2 className='text-3xl font-bold'>Bookmarked Blogs: {bookmarks.length} </h2>            
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};

Bookmarks.prototypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;