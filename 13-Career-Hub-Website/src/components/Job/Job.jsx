import { CiLocationOn,CiDollar  } from "react-icons/ci";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className=" p-10 bg-base-100 border-2">
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
                    <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-gradient">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;