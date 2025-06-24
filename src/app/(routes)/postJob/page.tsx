'use client';
import React from 'react'
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';



const jobFormSchema = z.object({
  job_title: z.string().min(1, 'Job title is required'),
  jobDescription: z.string().optional(),
  company_name: z.string().min(1, 'Company name is required'),
  job_location: z.string().min(1, 'Location is required'),
  company_email: z.string().email('Please enter a valid Email')
})

type jobFormType = z.infer<typeof jobFormSchema>;
const generateShortId = () => Math.random().toString(36).substring(2, 6);


function Page() {


  const { register, handleSubmit, reset, formState: { errors } } = useForm<jobFormType>({
    resolver: zodResolver(jobFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      job_title: '',
      jobDescription: '',
      company_name: '',
      job_location: '',
      company_email: ''
    }
  });


  const AddJobForm = async (data: jobFormType) => {
    try {
      const jobId = generateShortId();
      const jobFormData = { id: jobId, ...data };

      const Stored_jobList = localStorage.getItem('JobList');
      const jobList = Stored_jobList ? JSON.parse(Stored_jobList) : [];

      jobList.push(jobFormData);

      localStorage.setItem('JobList', JSON.stringify(jobList));
      toast.success('Job added successfully!');

      reset();

    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='max-w-3xl mx-auto mt-10 px-6'>
      <form onSubmit={handleSubmit(AddJobForm)} >
        <div className='field-group'>
          <label>Job Title</label>
          <input type='text' {...register('job_title')} />
          {errors.job_title && <p className='error'>{errors.job_title.message}</p>}
        </div>

        <div className='field-group'>
          <label>Company</label>
          <input type="text" {...register('company_name')} />
          {errors.company_name && <p className='error'>{errors.company_name.message}</p>}
        </div>

        <div className='field-group'>
          <label>Company Email</label>
          <input type="email" {...register('company_email')} />
          {errors.company_email && <p className='error'>{errors.company_email.message}</p>}
        </div>

        <div className='field-group'>
          <label>Job Description</label>
          <textarea {...register('jobDescription')}></textarea>
          {errors.jobDescription && <p className='error'>{errors.jobDescription.message}</p>}
        </div>


        <div className='field-group'>
          <label>Location</label>
          <input type="text" {...register('job_location')} />
          {errors.job_location && <p className='error'>{errors.job_location.message}</p>}
        </div>

        <button type='submit'>Add Job</button>
      </form>
    </div>
  )
}

export default Page
