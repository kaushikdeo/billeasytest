import { combineReducers } from 'redux';
import CompanyReducer from '../reducers/companyReducer';

const rootReducer = combineReducers({
  companyData: CompanyReducer,
});

export default rootReducer;