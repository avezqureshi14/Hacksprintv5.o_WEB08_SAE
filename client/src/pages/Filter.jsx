import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from '../redux/actions/location';
import { getJobs } from '../redux/actions/jobs';

const Filter = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location.data);
  const [locationFilter, setLocationFilter] = useState('');
  const [contractTypeFilter, setContractTypeFilter] = useState('');
  const [locationTypeFilter, setLocationTypeFilter] = useState('');
console.log(locationFilter)
  console.log(contractTypeFilter)
  console.log(locationFilter)
  useEffect(() => {
    dispatch(getLocation());
    dispatch(getJobs());

  }, [dispatch]);

  // Dummy job items (replace with your actual job items)
  const jobItems = useSelector((state) => state.jobs.data);
  // Function to filter job items based on selected filters
  const filteredJobItems = jobItems?.filter((item) => {
    return (
      (locationFilter === '' || item.location?.toLowerCase().includes(locationFilter?.toLowerCase())) &&
      (contractTypeFilter === '' || item.contractType?.toLowerCase() === contractTypeFilter) &&
      ((locationTypeFilter === '' && item?.modalities === locationTypeFilter) ||
        (locationTypeFilter === 'false' && item?.modalities === false) ||
        (locationTypeFilter === 'true' && item?.modalities === true))
    );
  });

  return (
    <div>
      <div className="filter-container">
        <select
          className="filter-dropdown"
          id="locationFilter"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">Location</option>
          {locations?.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          className="filter-dropdown"
          id="contractTypeFilter"
          value={contractTypeFilter}
          onChange={(e) => setContractTypeFilter(e.target.value)}
        >
          <option value="">Contract Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="internship">Internship</option>
        </select>

        <select
          className="filter-dropdown"
          id="locationTypeFilter"
          value={locationTypeFilter}
          onChange={(e) => setLocationTypeFilter(e.target.value)}
        >
          <option value="">Onsite/Remote</option>
          <option value="false">Onsite</option>
          <option value="true">Remote</option>
        </select>
      </div>

      <main style={{ marginTop: '2rem' }}>
        <div className="product-container">
          <div className="container">
            <div className="product-box">
              <div className="product-main">
                <div className="product-flex allPf">
                  {filteredJobItems?.map((job, index) => (
                    <div className="jobItemCard" key={index}>
                      <h3>{job.title}</h3>
                      <h4>{job.companyName}</h4>
                      <h4>Posted by {job.posterFullName}</h4>
                      <ul>
                        <li>
                          $ {job.salary} | <i className="bx bx-map"></i> {job.location}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Filter;


// {
//   "_id": "65e2157518f0b0f0c2ff0bd1",
//     "publishedAt": "2024-02-24",
//       "salary": "",
//         "title": "Social Media Marketing",
//           "jobUrl": "https://in.linkedin.com/jobs/view/social-media-marketing-at-brands-jar-3839457122?trk=public_jobs_topcard-title",
//             "companyName": "Brands Jar",
//               "companyUrl": "https://in.linkedin.com/company/brands-jar?trk=public_jobs_topcard-org-name",
//                 "location": "Pune, Maharashtra, India",
//                   "postedTime": "5 days ago",
//                     "applicationsCount": "Be among the first 25 applicants",
//                       "description": "Selected Intern's Day-to-day Responsibilities Include\n\n\n * Work on overseeing and managing all the company's social media accounts\n * Develop engaging, creative, innovative content for regularly scheduled posts, which enlighten audiences and promote brand-focused messages\n * Work on coordinating social media messaging with advertising departments, brand managers, and quarterly or seasonal company goals\n * Manage social media team members, including copywriters and other content creators, by overseeing their work, and offering guidance or direction\n * Work on auditing and analyzing social media presences, including digital advertising costs and returns\n * Work on analyzing social media campaigns with tracking systems to gather visitor data and determine efficacy and areas for social media campaign improvement\n * Work with other departments to develop social media timelines and coinciding with new product releases, ad campaigns, or other brand messages\n * Work on monitoring and developing reports on competitor activity within social media spaces\n   \n   \n\nAbout Company: Brands Jar was founded in 2018 as an experiment to create a prototype of a modern design studio. We are a branding agency located in Pune. We strongly believe in the idea of freedom in the workspace.",
//                         "contractType": "Internship",
//                           "experienceLevel": "Internship",
//                             "workType": "Marketing, Writing/Editing, and Management",
//                               "sector": "Advertising Services, Writing and Editing, and Media Production",
//                                 "companyId": "13740113",
//                                   "posterProfileUrl": "",
//                                     "posterFullName": "",
//                                       "modalities": false,
//                                         "createdAt": "2024-03-01T17:50:45.568Z",
//                                           "__v": 0
// },