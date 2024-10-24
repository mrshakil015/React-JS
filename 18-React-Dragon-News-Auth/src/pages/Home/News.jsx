import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = ({ news }) => {
    const { id, category_id, title, details, total_view, rating, author, image_url } = news
    const { name, published_date, img } = author
    return (
        <div className="my-5 border rounded-lg">
            <div className="flex flex-row items-center justify-between gap-4 bg-[#f3f3f3]  p-4 rounded-t-lg">
                <div className="flex items-center gap-4">
                    <img className="w-10 rounded-full" src={img} alt="" />
                    <div>
                        <h2 className="font-bold">{name}</h2>
                        <p className="text-[#706f6f]">{published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaBookmark />
                    <FaShareAlt />
                </div>
            </div>
            <div className="p-5">
                <h2 className="text-xl font-bold ">{title}</h2>
                <img className="my-5" src={image_url} alt="" />
                {
                    details.length > 200
                        ? <p>{details.slice(0, 200)}<Link
                            to={`/news/${id}`}
                            className="ml-3 text-red-500 font-bold">Read More...</Link></p>
                        : <p>{details}</p>
                }
            </div>
            <hr />

            <div className="flex justify-between p-4">
                <div className="flex items-center gap-3">
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-orange-500"></FaStar>
                        <FaStar className="text-orange-500"></FaStar>
                        <FaStar className="text-orange-500"></FaStar>
                        <FaStar className="text-orange-500"></FaStar>
                        <FaStar className="text-orange-500"></FaStar>
                    </div>
                    <p>{rating.number}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaEye></FaEye>
                    <p>{total_view}</p>
                </div>
            </div>

        </div>
    );
};

export default News;