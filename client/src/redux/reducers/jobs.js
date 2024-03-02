import { FETCH_JOBS } from "../constants/actionTypes";

export default (jobs = [], action) => {
    switch (action.type) {
        case FETCH_JOBS:
            return action.payload;
            break;
        default:
            return jobs;
    }
};
