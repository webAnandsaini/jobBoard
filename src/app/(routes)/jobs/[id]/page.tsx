'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { jobType } from '@/types/types';
import Link from 'next/link';
import { addToFavorites } from '@/components/commonFunctions';



const Page = () => {
  const { id } = useParams();
  const [job, setJob] = useState<jobType | null>(null);

  useEffect(() => {
    const storedJobs = localStorage.getItem('JobList');
    if (storedJobs) {
      const jobList: jobType[] = JSON.parse(storedJobs);
      const foundJob = jobList.find((j) => j.id === id);
      setJob(foundJob || null);
    }
  }, [id]);

  if (!job) {
    return <div className="max-w-2xl mx-auto p-6 text-red-600">Job not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex justify-between max-sm:flex-wrap gap-y-3">
      <div>
        <h1 className="text-xl font-bold mb-2">{job.job_title}</h1>
        <p className="mb-1">Company: <strong>{job.company_name}</strong></p>
        <p className="mb-1">Location: <strong>{job.job_location}</strong></p>
        <p className="mb-1">Email: <strong>{job.company_email}</strong></p>
        {job.jobDescription && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-800 mt-2">{job.jobDescription}</p>
          </div>
        )}
      </div>
      <div className='min-w-fit'>
          <button onClick={() => addToFavorites(job.id)}>Add favorite</button>

      </div>
      </div>


      <div className='mt-10 flex justify-end'>
        <Link href={'/'} className='bg-green-400 px-3 py-1 text-base rounded-md'>Back To Jobs</Link>

      </div>

    </div>
  );
};

export default Page;
