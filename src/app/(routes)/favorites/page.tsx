'use client';
import React, { useEffect, useState } from 'react';
import {jobType} from '@/types/types';
import Link from 'next/link';


const Page = () => {
  const [favoriteJobs, setFavoriteJobs] = useState<jobType[]>([]);

  useEffect(() => {
    const jobList: [jobType] = JSON.parse(localStorage.getItem('JobList') || '[]');
    const favoriteIds : [string] = JSON.parse(localStorage.getItem('favorites') || '[]');

    const filtered = jobList.filter((job) => favoriteIds.includes(job.id));
    setFavoriteJobs(filtered);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 mt-5">
      <h1 className="text-2xl font-bold mb-4">Favorite Jobs</h1>

      {favoriteJobs.length === 0 ? (
        <p className="text-gray-500">No favorites found.</p>
      ) : (
        <div className="space-y-4 mt-6">
          {favoriteJobs.map((job, index) => (
            <div
            key={index}
            className="border border-slate-400 py-2 px-3 rounded shadow hover:bg-gray-50 transition"
          >
            <div className='flex justify-between sm:items-center gap-3'>
              <div className='flex gap-3 items-center max-sm:flex-wrap'>
                <h2 className="text-lg font-semibold">{job.job_title}</h2>
                <p className="text-gray-700 block sm:inline-block">{job.company_name} — {job.job_location}</p>
              </div>
              <div className='min-w-fit'>
              <Link href={`/jobs/${job.id}`} className="text-blue-600 hover:underline text-sm mt-4 inline-block">View Details</Link>
              </div>
            </div>

            {job.jobDescription && (
              <p className="text-sm text-gray-600 mt-1 line-clamp-3">{job.jobDescription}</p>
            )}

          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
