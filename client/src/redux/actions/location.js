import * as api from "../api";
import {  FETCH_LOCATIONS } from "../constants/actionTypes";

export const getLocation = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLocation();
        dispatch({ type: FETCH_LOCATIONS, payload: data });
    } catch (error) {
        console.log(error);
    }
};
