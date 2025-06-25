'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { jobType } from '@/types/types';
import { addToFavorites, removeFavorites } from '@/components/commonFunctions';
import { Heart } from 'lucide-react';



const Page = () => {
  const [fetchJobs, setFetchJobs] = useState<jobType[]>([]);
  const [filterJobs, setfilterJobs] = useState<jobType[]>([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [refetch, setReFetch] = useState(true);

  useEffect(() => {
    const getJobs = localStorage.getItem('JobList');
    if (getJobs) {
      const joblisting: jobType[] = JSON.parse(getJobs);
      setFetchJobs(joblisting);
      setfilterJobs(joblisting);
    }
  }, [refetch]);


  useEffect(() => {
    const titleFilter = searchTitle.toLowerCase();
    const locationFilter = searchLocation.toLowerCase();

    const filter = fetchJobs.filter((job) => {
      const titleMatch = job.job_title.toLowerCase().includes(titleFilter);
      const locationMatch = job.job_location.toLowerCase().includes(locationFilter);
      return titleMatch && locationMatch;
    });

    setfilterJobs(filter);
  }, [searchTitle, searchLocation, fetchJobs]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 mt-5">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Filter by Job Title"
          className="border p-2 flex-1"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Location"
          className="border p-2 flex-1"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />

        {
          (searchTitle || searchLocation) && <div className='cursor-pointer' onClick={() => {
            setSearchTitle('');
            setSearchLocation('');
          }}>Clear Filter</div>
        }
      </div>

      {filterJobs.length === 0 ? (
        <p className="text-gray-500">No job found.</p>
      ) : (
        <div className="space-y-4">
          {filterJobs.map((job, index) => (
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
                  {job.isFavorite ? (
                   <div onClick={() => {
                    removeFavorites(job.id)
                    setReFetch(!refetch);
                   }} className='cursor-pointer'><Heart fill='#000' /></div>

                  ) : (
                   <div onClick={() => {
                    addToFavorites(job.id)
                    setReFetch(!refetch);
                  }} className='cursor-pointer'><Heart /></div>
                  )}
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
