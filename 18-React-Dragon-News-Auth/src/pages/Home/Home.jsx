import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import News from "./News";

const Home = () => {
    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNewsData(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>

                {/* main news section */}
                <div className="md:col-span-2">
                <h2>Dragon News Home: {newsData.length}</h2>
                <div>
                    {
                        newsData.map(news => <News key={news.id} news={news}></News>)
                    }
                </div>
                </div>


                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;