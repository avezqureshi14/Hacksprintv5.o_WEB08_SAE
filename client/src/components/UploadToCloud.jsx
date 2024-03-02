import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../redux/actions/jobs';

const UploadToCloud = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.data);
  console.log(jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const submitPdf = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const result = await axios.post('http://localhost:8800/pdf/upload-files', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (result.data.status === 'ok') {
        alert('Uploaded Successfully!!!');
        const skills = result?.data?.extractedData;
        localStorage.setItem('skills', skills);
        console.log(skills);

        // Filter jobs based on skills
        const filteredJobs = jobs.filter((job) => {
          const jobDescription = job.description.toLowerCase();
          const skillsArray = skills.toLowerCase().split(',');

          return skillsArray.some((skill) => jobDescription.includes(skill.trim()));
        });

        console.log('Filtered Jobs:', filteredJobs);
      } else {
        setError('Error uploading file');
      }
    } catch (error) {
      console.error('Error uploading file', error);
      setError('Error uploading file. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={submitPdf}>
        <input onChange={(e) => setFile(e.target.files[0])} type="file" accept="application/pdf" />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UploadToCloud;
