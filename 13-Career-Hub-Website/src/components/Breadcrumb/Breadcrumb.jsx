import { useLocation } from 'react-router-dom';
import bg1 from '../../assets/images/bg1.png'
// import bg2 from '../../assets/images/bg2.png'
const Breadcrumb = () => {
    const location = useLocation();


     // Map different routes to different titles
     const getTitle = () => {
        if (location.pathname.startsWith('/job/')) {
            return `Job Details`; // Dynamic title for job details route
        }

        switch (location.pathname) {
            case '/applied':
                return 'Applied Jobs';
            case '/jobs':
                return 'Featured Jobs';
            default:
                return 'Welcome to Career Hub';
        }
    };

    return (
        <div className="grid grid-cols-3 text-center justify-center bg-[#f4f2ff] relative">
            {/* First image bg1, positioned at the bottom */}
            <figure className="col-start-1 col-span-1 relative">
                <img className='absolute bottom-0 left-0' src={bg1} alt="logo" />
            </figure>

            {/* Main content in the center */}
            <div className="md:max-w-6xl mx-auto h-56 flex items-center justify-center col-span-1">
                <h2 className="text-3xl font-extrabold text-center">{getTitle()}</h2>
            </div>

            {/* Second image bg2, positioned on the right */}
            {/* <figure className="col-start-3 col-span-1 relative -mt-[70px]">
                <img className='absolute right-0' src={bg2} alt="logo" />
            </figure> */}
        </div>


    );
};

export default Breadcrumb;