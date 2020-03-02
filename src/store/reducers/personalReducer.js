const initState = {
  personales: []
};

const personalReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PERSONAL":
      return state;
    case "CREATE_PERSONAL_ERROR":
      return state;
    default:
      return state;
  }
};

export default personalReducer;
