import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:8800/" });
export const fetchJobs = () => API.get("/jobs/")
export const fetchLocation = () => API.get("/location/")
 