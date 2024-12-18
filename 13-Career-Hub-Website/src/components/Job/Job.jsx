import { CiLocationOn,CiDollar  } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className=" p-10 bg-base-100 border-2 rounded-md">
            <figure className="mb-8">
                <img className="h-10" src={logo} alt="logo" />
            </figure>
            <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-[#595858]">{job_title}</h2>
                <p className="font-semibold text-[#757575]">{company_name}</p>
                <div className="flex mt-4 gap-4 text-[#757575]">
                    <p className="flex"><CiLocationOn className="text-2xl mr-2"></CiLocationOn> {location}</p>
                    <p className="flex"><CiDollar className="text-2xl mr-2"></CiDollar> {salary}</p>
                </div>
                <div>
                    <button className="text-xs px-3 py-1 font-bold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="text-xs px-3 py-1 font-bold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-gradient">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;