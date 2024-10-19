import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { CiLocationOn, CiDollar, CiPhone, CiMail, CiCalendar } from "react-icons/ci";
import { TbHandClick } from "react-icons/tb";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    const { job_title, job_description, job_responsibility, educational_requirements, experiences, salary, contact_information } = job;

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }

    return (
        <div className="mb-10">
            <Breadcrumb></Breadcrumb>
            <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-5 mt-20">
                <div className="md:col-span-3 space-y-6 text-[#757575]">
                    <p><strong className="text-black">Job Description: </strong>{job_description}</p>
                    <p><strong className="text-black">Job Responsibilities: </strong>{job_responsibility}</p>
                    <p><strong className="text-black">Educational Requirements:</strong></p>
                    <p>{educational_requirements}</p>
                    <p><strong className="font-bold text-black">Experiences:</strong></p>
                    <p>{experiences}</p>

                </div>
                <div className="md:col-span-2">
                    <div className="bg-[#f4f2ff] p-7 rounded-md">
                        <h2 className="text-xl font-extrabold border-b-2 border-b-gray-200 text-black pb-4">Job Details</h2>
                        <div className="space-y-2 mt-4">
                            <p className="flex"><CiDollar className="text-2xl mr-2"></CiDollar> <strong> Salary: </strong>{salary}</p>
                            <p className="flex"><CiCalendar className="text-2xl mr-2"></CiCalendar> <strong>Job Title: </strong>{job_title}</p>
                        </div>
                        <h2 className="text-xl font-extrabold text-black border-b-2 border-b-gray-200 py-4">Contact Information</h2>
                        <hr />
                        <div className="space-y-2 my-4">
                            <p className="flex"><CiPhone className="text-2xl mr-2"></CiPhone> <strong>Phone: </strong>{contact_information.phone}</p>
                            <p className="flex"><CiMail className="text-2xl mr-2"></CiMail> <strong>Email: </strong>{contact_information.email}</p>
                            <p className="flex"><CiLocationOn className="text-2xl mr-2"></CiLocationOn> <strong>Address: </strong>{contact_information.address}</p>
                        </div>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-gradient w-full mt-6">Apply Now<TbHandClick className="text-xl"></TbHandClick></button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;