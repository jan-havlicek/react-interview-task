import {combineReducers} from 'redux';
import reportsReducer from '../../reports/reducers/reportsReducer';

/**
 * Root reducer creates basic structure of the redux state
 */

const rootReducer = combineReducers({
    reports: reportsReducer
});

export default rootReducer;
