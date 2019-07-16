import { FETCH_STORES_DATA_START, FETCH_STORES_DATA_SUCESS, FETCH_STORES_DATA_FAILURE } from '../actions/actionConstants';

export default function companyReducer(state={}, action) {
  switch (action.type) {
    case FETCH_STORES_DATA_START: {
      // start fetching company data and set loading to true
      return {
        ...state,
        loading: true,
        company: null,
      };
    }
    case FETCH_STORES_DATA_SUCESS: {
      // start fetching company data and set loading to true
      return {
        ...state,
        loading: false,
        company: action.payload.data
      };
    }
    case FETCH_STORES_DATA_FAILURE: {
      // start fetching company data and set loading to true
      return {
        ...state,
        loading: false,
        company: action.payload.error
      };
    }
    default: return state;
  }
}