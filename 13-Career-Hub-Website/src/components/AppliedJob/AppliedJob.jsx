import { CiLocationOn,CiDollar  } from "react-icons/ci";
import { Link } from "react-router-dom";
const AppliedJob = ({ appliedjob }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = appliedjob;
    return (
        <div className="border flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between items-center p-7">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex items-center bg-[#F4F4F4] rounded-md">
                    <figure>
                        <img className="py-7 md:w-40 px-7" src={logo} alt="logo" />
                    </figure>
                </div>
                <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-[#595858]">{job_title}</h2>
                    <p className="font-semibold text-[#757575]">{company_name}</p>
                    <div className="flex mt-4 gap-4 text-[#757575]">
                        <p className="flex"><CiLocationOn className="text-2xl mr-2"></CiLocationOn> {location}</p>
                        <p className="flex"><CiDollar className="text-2xl mr-2"></CiDollar> {salary}</p>
                    </div>
                    <div>
                        <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/job/${id}`}>
                <button className="btn btn-gradient">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJob;