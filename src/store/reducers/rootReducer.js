import authReducer from './authReducer';
import resumeReducer from './resumeReducer';
import { combineReducers } from 'redux'


// stateobject
const rootReducer = combineReducers({
    auth: authReducer,
   resume: resumeReducer
}) ;

export default rootReducer;