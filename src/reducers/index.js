import { combineReducers } from 'redux';
import jsonApiDataReducer from './json_data_reducer';
import graphqlDataReducer from './graphql_data_reducer';

// Root reducer. 
export default combineReducers({
    // Other reducers. 
    jsonData: jsonApiDataReducer,
    graphqlData: graphqlDataReducer
});