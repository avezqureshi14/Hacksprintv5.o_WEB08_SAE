const linkedIn = require('linkedin-jobs-api');

const queryOptions = {
    keyword: 'software engineer',
    location: 'India',
    dateSincePosted: 'past Week',
    jobType: 'full time',
    remoteFilter: 'remote',
    salary: '100000',
    experienceLevel: 'entry level',
    limit: '10'
};

const getLinkedInJobs = async (req, res) => {
    try {
        const response = await linkedIn.query(queryOptions);
        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching LinkedIn jobs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getLinkedInJobs,
};
