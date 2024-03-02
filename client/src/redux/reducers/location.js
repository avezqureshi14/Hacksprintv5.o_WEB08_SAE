import { FETCH_LOCATIONS } from "../constants/actionTypes";

export default (locations = [], action) => {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return action.payload;
            break;
        default:
            return locations;
    }
};
