const initState = {
  personal: null,
  loading: false
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_LOADING":
      return {
        ...state,
        loading: true,
        searchError: null,
        personal: null
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        personal: action.payload,
        loading: false
      };
    case "SEARCH_NOT_FOUND":
      return {
        ...state,
        personal: null,
        notFound: "No se ha encontrado ningún personal",
        loading: false
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        personal: null,
        notFound: null,
        searchError: "No se ha encontrado ningún personal",
        loading: false
      };
    case "SEARCH_RESET":
      return {
        ...state,
        personal: null
      };
    default:
      return state;
  }
};

export default searchReducer;
