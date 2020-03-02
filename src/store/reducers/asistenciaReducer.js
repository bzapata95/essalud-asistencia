const initState = {
  guardado: false
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "ASISTENCIA_SUCCESS":
      return {
        ...state,
        guardado: true
      };
    case "ASISTENCIA_ERROR":
      return {
        ...state,
        guardado: false,
        error: "Ocurriendo algun error al guardad su asistencia"
      };
    default:
      return state;
  }
};

export default searchReducer;
