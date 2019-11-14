const initialState = {
  loading: false,
  data: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUUEST_LOADING":
      return (state = {
        loading: true
      });
    case "REQUEST_SUCCESS":
      return (state = {
        loading: false,
        data: [...action.payload]
      });

    case "REQUEST_FAIL":
      return (state = {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
};

export default reducer;
