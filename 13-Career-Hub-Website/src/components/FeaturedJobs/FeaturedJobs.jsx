import { useEffect, useState } from "react";
import Job from "../Job/Job";
import Breadcrumb from "../Breadcrumb/Breadcrumb";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])


    return (

        <div>
            <div className="max-w-6xl mx-auto my-32">
                <div className="text-center space-y-4 mb-8">
                    <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
                    <p className="text-[#757575]">
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                    }

                </div>
                <div className={`flex justify-center mt-5 ${dataLength >= jobs.length && 'hidden'}`}>
                    <button
                        onClick={() => setDataLength(dataLength + 4)}
                        className="btn btn-gradient">Show More Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;