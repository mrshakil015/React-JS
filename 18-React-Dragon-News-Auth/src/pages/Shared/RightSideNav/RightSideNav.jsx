import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter  } from 'react-icons/fa';
import qZone1 from '../../../assets/images/qZone1.png';
import qZone2 from '../../../assets/images/qZone2.png';
import qZone3 from '../../../assets/images/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-4'>
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            
            {/* Find us on */}
            <div className='p-4 mb-4'>
                <h2 className="text-3xl font-semibold">Find Us On</h2>
                <a href="" className='p-4 flex items-center text-lg border rounded-t-lg'>
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a href="" className='p-4 flex items-center text-lg border-x'>
                    <FaInstagram className='mr-3'></FaInstagram>
                    Instagram
                </a>
                <a href="" className='p-4 flex items-center text-lg border rounded-b-lg'>
                    <FaTwitter className='mr-3'></FaTwitter>
                    Twitter
                </a>
            </div>

            {/* Q Zone */}
            <div className='p-4 mb-4 bg-[#F3F3F3]'>
                <h2 className="text-3xl font-semibold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;