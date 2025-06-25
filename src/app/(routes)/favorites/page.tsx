'use client';
import React, { useEffect, useState } from 'react';
import {jobType} from '@/types/types';
import Link from 'next/link';
import { removeFavorites } from '@/components/commonFunctions';
import { Heart } from 'lucide-react';


const Page = () => {
  const [favoriteJobs, setFavoriteJobs] = useState<jobType[]>([]);
  const [refetch, setReFetch] = useState(true);

  useEffect(() => {
    const jobList: [jobType] = JSON.parse(localStorage.getItem('JobList') || '[]');

    const filtered = jobList.filter((job) => job.isFavorite === true);
    setFavoriteJobs(filtered);
  }, [refetch]);

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
            <div className='flex justify-between items-center gap-3'>
              <div className='flex gap-3 items-center max-sm:flex-wrap'>
                <h2 className="text-lg font-semibold">{job.job_title}</h2>
                <p className="text-gray-700">{job.company_name} — {job.job_location}</p>
              </div>
              <div className='min-w-fit'>

                 <div onClick={() => {
                  removeFavorites(job.id)
                  setReFetch(!refetch);
                 }} className='cursor-pointer'><Heart fill='#000' /></div>


              </div>
            </div>

            {job.jobDescription && (
              <p className="text-sm text-gray-600 mt-1 line-clamp-3">{job.jobDescription}</p>
            )}

            <Link href={`/jobs/${job.id}`} className="text-blue-600 hover:underline text-sm mt-4 inline-block">View Details</Link>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
