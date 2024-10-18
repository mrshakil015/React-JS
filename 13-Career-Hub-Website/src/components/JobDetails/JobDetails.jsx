import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    const { job_title, job_description, job_responsibility, educational_requirements, experiences, salary, contact_information } = job;

    const handleApplyJob = () =>{
        saveJobApplication(id);
        toast('You have applied successfully');
    }

    return (
        <div className="mb-10">
            <div className="grid gap-4 md:grid-cols-4 mt-20">
                <div className="md:col-span-3 space-y-6 text-[#757575]">
                    <p><strong className="text-black">Job Description: </strong>{job_description}</p>
                    <p><strong className="text-black">Job Responsibilities: </strong>{job_responsibility}</p>
                    <p><strong className="text-black">Educational Requirements:</strong></p>
                    <p>{educational_requirements}</p>
                    <p><strong className="font-bold text-black">Experiences:</strong></p>
                    <p>{experiences}</p>

                </div>
                <div>
                    <div className="bg-[#f4f2ff] py-7 px-4 rounded-md">
                        <h2 className="text-xl font-extrabold border-b-2 border-b-gray-200 text-black pb-4">Job Details</h2>
                        <div className="space-y-2 mt-4">
                            <p><strong>Salary: </strong>{salary}</p>
                            <p><strong>Job Title: </strong>{job_title}</p>
                        </div>
                        <h2 className="text-xl font-extrabold text-black border-b-2 border-b-gray-200 py-4">Contact Information</h2>
                        <hr />
                        <div className="space-y-2 my-4">
                            <p><strong>Phone: </strong>{contact_information.phone}</p>
                            <p><strong>Email: </strong>{contact_information.email}</p>
                            <p><strong>Address: </strong>{contact_information.address}</p>
                        </div>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-gradient w-full mt-6">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;