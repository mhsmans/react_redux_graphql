import { combineReducers } from 'redux';
import dataReducer from './data_reducer';

// Root reducer. 
export default combineReducers({
    // Other reducers. 
    data: dataReducer
});