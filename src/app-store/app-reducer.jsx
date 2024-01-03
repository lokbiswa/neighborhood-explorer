import { initialState } from './app-store';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA_LOADING':
      return {
        ...state,
        dataLoading: action.payload,
      };
    case 'SET_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_SELECTED_NEIGHBORHOOD':
      return {
        ...state,
        selectedNeighborhood: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
