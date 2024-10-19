import userimg from '../../assets/images/user.png';
const Banner = () => {
    return (
        <div className="bg-[#f4f2ff]">
            <div className="grid md:grid-cols-2 items-center p-4 md:max-w-6xl md:mx-auto">
                <div className='space-y-6'>
                    <h2 className='text-7xl font-extrabold leading-tight'>
                        One Step<br />Closer To Your <br /><span className='text-[#7E90FE]'>Dream Job</span>
                    </h2>
                    <p className='text-[#757575]'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className='btn btn-gradient'>Get Started</button>
                </div>
                <figure>
                    <img src={userimg} alt="logo" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;