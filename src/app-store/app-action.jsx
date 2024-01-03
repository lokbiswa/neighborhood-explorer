export const loadData = (payload) => (dispatch) => {
  dispatch({
    type: 'SET_DATA',
    payload,
  });
};

export const setLoading = (payload) => (dispatch) => {
  dispatch({
    type: 'SET_DATA_LOADING',
    payload,
  });
};

export const updateSelectedNeighborhood = (payload) => (dispatch) => {
  dispatch({
    type: 'SET_SELECTED_NEIGHBORHOOD',
    payload,
  });
};
