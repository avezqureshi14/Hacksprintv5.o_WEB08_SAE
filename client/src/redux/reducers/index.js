import { combineReducers } from 'redux'
import jobs from './jobs';
import location from './location';
const rootReducer = combineReducers({
    jobs,
    location
});

export default rootReducer;
