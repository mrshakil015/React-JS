import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="mx-5 h-[600px] object-cover rounded-3xl flex items-center px-5 lg:px-48" style={{ backgroundImage: `url(${banner})` }}>
                <div className="items-center justify-center text-center">
                    <h1 className="text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="py-6 text-white">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                    </p>
                    <div className='flex justify-center gap-6 mt-8'>
                        <button className="btn bg-[#0BE58A] border-none rounded-full">Explore Now</button>
                        <button className="btn bg-transparent border-2 border-white text-white rounded-full">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;