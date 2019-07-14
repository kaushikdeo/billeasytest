import { FETCH_STORES_DATA } from '../actions/actionConstants';

export default function companyReducer(state={}, action) {
  switch (action.type) {
    case FETCH_STORES_DATA: {
      // return company data that is fetched from the rest api endpoint
      return {};
    }
    default: return state;
  }
}