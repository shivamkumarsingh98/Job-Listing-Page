
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navebar from '../Navebar/Navebar';
import style from './jobdetails.module.css'


function Jobdetails() {
  const { state } = useLocation();
  const { id } = state
  const [jobDetails, setJobDetails] = useState(undefined);

  useEffect(() => {
    const backendURL = process.env.backendURL
    console.log("Backend URL:", backendURL);
    axios.get(`${backendURL}/create/job-post/${id}`)
      .then((response) => {
        console.log("response.data:", response.data)

        setJobDetails(response.data);
      }
      )
      .catch((error) => {
        console.error('Error fetching job details', error);
      });
  }, []);

  return (
    <div className={style.body}>
      <Navebar />
      {jobDetails ? (
        <>
          <div className={style.tabone}>
            <h4>{jobDetails.jobpost.position}/{jobDetails.jobpost.worktype}/{jobDetails.jobpost.jobtype} at {jobDetails.jobpost.name}</h4>
          </div>
          <div className={style.section}>
            <h2>{jobDetails.jobpost.position}</h2>
            <p>{jobDetails.jobpost.location} | India</p>
            <p>Rs {jobDetails.jobpost.salary}/month</p>
            <h4>About:</h4>
            <p>{jobDetails.jobpost.about}</p>
            <h4>Job Description:</h4>
            <p>{jobDetails.jobpost.description}</p>
            <h4>Skill(s) required:</h4>
            <p>{jobDetails.jobpost.skills}</p>
            <h4>Information:</h4>
            <p>{jobDetails.jobpost.information}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>


  )
}

export default Jobdetails
