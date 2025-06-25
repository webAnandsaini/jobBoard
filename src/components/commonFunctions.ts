import { jobType } from "@/types/types";
import { toast } from "react-toastify";

export const addToFavorites = (id: string) => {
  const jobList = JSON.parse(localStorage.getItem('JobList') || '[]');

  let alreadyFavorite = false;

  const updatedJobList = jobList.map((job: jobType) => {
    if (job.id === id) {
      if (job.isFavorite) {
        alreadyFavorite = true;
        return job;
      }
      return { ...job, isFavorite: true };
    }
    return job;
  });

  localStorage.setItem('JobList', JSON.stringify(updatedJobList));

  if (alreadyFavorite) {
    toast.info('Already in favorites');
  } else {
    toast.success('Favorite added successfully!');
  }
};

export const removeFavorites = (id: string) => {
  const jobList = JSON.parse(localStorage.getItem('JobList') || '[]');

  const updatedJobList = jobList.map((job: jobType) =>
    job.id === id ? { ...job, isFavorite: false } : job
  );

  localStorage.setItem('JobList', JSON.stringify(updatedJobList));
  toast.success('Removed from favorites!');
};
