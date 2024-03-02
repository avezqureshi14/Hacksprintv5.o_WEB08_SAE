import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../redux/actions/jobs';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const Single = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.data);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch, id]);

  const job = jobs?.filter((item, index) => item._id === id)?.[0];
  // Define the URL you want to share
  const shareUrl = 'https://example.com/job-details/' + id;

  // Predefined share links for each social media platform
  const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(job?.title)}`;
  const linkedinShareLink = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(job?.title)}&summary=${encodeURIComponent(job?.description)}`;

  if (!job) {
    return <Loading />;
  }

  const descriptionLines = job?.description.split('*').filter(line => line.trim() !== '');

  return (
    <div>
      <main className="jobdetail">
        <div className="space1"></div>
        <div className="space2">
          <div className="jobItemCard jobDetailCard">
            <h3>{job?.title}</h3>
            <h4>{job?.companyName}</h4>
            <h4>Posted by {job?.posterFullName}</h4>
            <ul>
              <li>
                $ {job?.salary} | <i className="bx bx-map"></i> {job?.location}
              </li>
            </ul>
            {descriptionLines && (
              <div>
                {descriptionLines?.slice(0,3)?.map((line, index) => (
                  <p key={index}>{line.trim()}...</p>
                ))}
              </div>
            )}
            <br />
            <hr />
            <ul>
              <div>
                <li>
                  Posted : <strong>{job?.postedTime}</strong> | Applicants : <strong>66578</strong>
                </li>
              </div>
              <div className="actionBtns">
                <ul>
                  <li>
                    <button className="outline">Save</button>
                  </li>
                  <li>
                    {' '}
                    <a href={job?.jobUrl} target="__blank">
                      {' '}
                      <button className="fill mleft">Apply</button>
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
          <div className="jobItemCard jobDetailCard jd">
            {descriptionLines && (
              <div>
                <strong>Job description : </strong>
                <br />
                {descriptionLines.map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))}
              </div>
            )}
            <br />
            <br />
            <strong>Role :</strong>
            <p>{job?.workType}</p>
            <br />
            <br />
            <strong>Industry Type :</strong>
            <p>{job?.sector}</p>
            <br />
            <br />
            <strong>Employment Type :</strong>
            <p>{job?.contractType}</p>
            <br />
            <br />
            <strong>Department :</strong>
            <p>{job?.modalities ? 'Remote' : 'Office-based'}</p>
            <br />
            <br />
            <hr />
            <br />
            <div className="jobDetailFoot">
              <div className="socials">
                <ul>
                  <li>
                    <a href={facebookShareLink} target="__blank" className="social-btn">
                      <i className="bx bxl-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href={twitterShareLink} target="__blank" className="social-btn">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={linkedinShareLink} target="__blank" className="social-btn">
                      <i className="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="reportButton">
                <a href="#">Report this Job</a>
              </div>
            </div>
          </div>
        </div>
        <div className="space3">
          <div className="jobItemCard s3">
            <h3>{job?.title}</h3>
            <h4>{job?.companyName}</h4>
            <h4>Posted by {job?.posterFullName}</h4>
            <ul>
              <li>
                $ {job?.salary} | <i className="bx bx-map"></i> {job?.location}
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Single;
