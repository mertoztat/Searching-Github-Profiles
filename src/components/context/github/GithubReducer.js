const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case "DELETE_USERS":
      return {
        ...state,
        users: [],
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_USER_DETAIL":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "GET_USER_REPO":
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
