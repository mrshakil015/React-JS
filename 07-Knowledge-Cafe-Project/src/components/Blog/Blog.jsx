import PropTypes from "prop-types";
import { IoBookmarksOutline  } from "react-icons/io5";

const Blog = ({ blog }) => {
    const {cover_img, title, author, author_img, posted_date, reading_time, hashtags} = blog;
    
    return (
        <div className="mb-20">
            <img className="w-full h-[450px] object-cover mb-8 rounded-md" src={cover_img} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="flex"> 
                    <img className="w-14 rounded-full" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="space-x-2">
                    <span>{reading_time} min read</span>
                    <button><IoBookmarksOutline  /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="space-x-3">
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;