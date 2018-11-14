import { combineReducers } from 'redux';
import jsonApiDataReducer from './json_data_reducer';
import graphqlDataReducer from './graphql_data_reducer';
import coreRestLoginReducer from './core_rest_login_reducer';

// Root reducer. 
export default combineReducers({
    // Other reducers. 
    jsonData: jsonApiDataReducer,
    graphqlData: graphqlDataReducer,
    coreRestCookie: coreRestLoginReducer
});