const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    publishedAt: String,
    salary: String,
    title: String,
    jobUrl: String,
    companyName: String,
    companyUrl: String,
    location: String,
    postedTime: String,
    applicationsCount: String,
    description: String,
    contractType: String,
    experienceLevel: String,
    workType: String,
    sector: String,
    companyId: String,
    posterProfileUrl: String,
    posterFullName: String,
    //onSite : false
    //remote : true
    modalities: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Job", jobSchema);
