import * as api from "../api";
import { FETCH_JOBS, FETCH_LOCATIONS } from "../constants/actionTypes";

export const getJobs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchJobs();
        dispatch({ type: FETCH_JOBS, payload: data });
    } catch (error) {
        console.log(error);
    }
};
