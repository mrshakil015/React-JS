import Navbar from "./Shared/Navbar";
import banner from "../assets/images/Rectangle 1.png";
import sajek from '../assets/images/Sajek.png';
import sreemangal from '../assets/images/Sreemongol.png';
import sundorbon from '../assets/images/sundorbon.png';

const Home = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${banner})`
            }}
        >
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <div className="col-span-3 carousel w-full">

                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero text-white">
                            <div className="hero-content grid grid-cols-5 ">
                                <div className="col-span-2">
                                    <h1 className="text-7xl font-extrabold">SAJEK</h1>
                                    <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et itaque ullam odit, tenetur veritatis ipsum ad perferendis inventore perspiciatis quas.</p>
                                    <button className="btn bg-[#F9A51A] border-none px-7">Booking</button>
                                </div>
                                <img
                                    src={sajek}
                                    className="col-span-3 rounded-full shadow-2xl border-8 border-[#F9A51A]" />
                            </div>
                        </div>
                        <div className="absolute left-0 right-3/4 bottom-3/4 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="hero text-white">
                            <div className="hero-content grid grid-cols-5 ">
                                <div className="col-span-2">
                                    <h1 className="text-6xl font-extrabold">SREEMANGAL</h1>
                                    <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nostrum vitae minima velit placeat, omnis accusantium voluptatum excepturi fugit id?</p>
                                    <button className="btn bg-[#F9A51A] border-none px-7">Booking</button>
                                </div>
                                <img
                                    src={sreemangal}
                                    className="col-span-3 rounded-full shadow-2xl border-8 border-[#F9A51A]" />
                            </div>
                        </div>
                        <div className="absolute left-0 right-3/4 bottom-3/4 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="hero text-white">
                            <div className="hero-content grid grid-cols-5 ">
                                <div className="col-span-2">
                                    <h1 className="text-6xl font-extrabold">SUNDARBANS</h1>
                                    <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rerum rem ea tenetur sint modi asperiores animi aliquid quae dolores?</p>
                                    <button className="btn bg-[#F9A51A] border-none px-7">Booking</button>
                                </div>
                                <img
                                    src={sundorbon}
                                    className="col-span-3 rounded-full shadow-2xl border-8 border-[#F9A51A]" />
                            </div>
                        </div>
                        <div className="absolute left-0 right-3/4 bottom-3/4 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};



export default Home;