import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            console.log(jobsApplied)
        }
    }, [])

    return (
        <div className="my-24">
            <div className="space-y-6 rounded-md p-3 md:p-0">
            {
                appliedJobs.map((appliedjob,idx) => <AppliedJob key={idx} appliedjob={appliedjob}></AppliedJob>)
            }  
            </div>        
        </div>
    );
};

export default AppliedJobs;