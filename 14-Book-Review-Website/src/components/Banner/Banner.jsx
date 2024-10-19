import { Link } from "react-router-dom";
import bannerbook from '../../assets/images/banner-book.png';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center  bg-[#e3f9e0] px-5 py-5 md:px-32 md:py-20 rounded-3xl my-12">
            <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">Books to freshen up<br/>your bookshelf</h2>
                <Link><button className="btn bg-[#23BE0A] text-white font-bold mt-3 md:mt-10">View The List</button></Link>
            </div>
            <figure>
                <img className="h-[300px] md:h-[400px]"
                    src={bannerbook}
                    alt="banner" />
            </figure>
        </div>
    );
};

export default Banner;